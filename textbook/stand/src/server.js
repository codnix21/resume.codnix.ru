import express from "express";
import { canReadTicket } from "./access.js";
import { applySecurityHeaders } from "./headers.js";
import { escapeHtml } from "./escapeHtml.js";
import { publicError } from "./errors.js";
import { validateTicket } from "./validate.js";
import { auditEvent } from "./auditLog.js";
import { sessionCookieOptions } from "./session.js";

/**
 * Синтетические данные. Это не персональные данные студентов.
 * Сервер демонстрирует защитное поведение и не содержит учебных дефектов в маршрутах.
 */
function initialState() {
  return {
    users: [
      { id: "user-01", email: "student-a@lab.test", role: "student", name: "Студент А" },
      { id: "user-02", email: "student-b@lab.test", role: "student", name: "Студент Б" },
      { id: "user-03", email: "admin@lab.test", role: "admin", name: "Преподаватель" },
    ],
    tickets: [
      { id: "ticket-01", ownerId: "user-01", title: "Не открывается журнал", description: "Учебная заявка А", status: "open" },
      { id: "ticket-02", ownerId: "user-02", title: "Нужна справка", description: "Учебная заявка Б", status: "new" },
    ],
    sessions: new Map(),
  };
}

export function createApp() {
  const { users, tickets, sessions } = initialState();

  function actorFrom(req) {
    const id = sessions.get(req.headers["x-lab-session"]);
    return users.find((user) => user.id === id) || null;
  }

  const app = express();
  app.disable("x-powered-by");
  app.use(express.json({ limit: "16kb" }));
  app.use((req, res, next) => {
    applySecurityHeaders(res);
    next();
  });

  app.get("/health", (_req, res) => {
    res.json({ ok: true });
  });

  app.post("/api/session", (req, res) => {
    const user = users.find((item) => item.email === req.body?.email);
    if (!user) {
      res.status(401).json(publicError("LAB-401"));
      return;
    }
    const sessionId = `lab-${user.id}`;
    sessions.set(sessionId, user.id);
    res.setHeader("Set-Cookie", cookieHeader("lab_session", sessionId));
    res.json({ sessionId, role: user.role });
  });

  app.delete("/api/session", (req, res) => {
    sessions.delete(req.headers["x-lab-session"]);
    res.status(204).end();
  });

  app.get("/api/tickets/:id", (req, res) => {
    const actor = actorFrom(req);
    const ticket = tickets.find((item) => item.id === req.params.id);
    if (!ticket) {
      res.status(404).json(publicError("LAB-404"));
      return;
    }
    if (!canReadTicket(actor, ticket)) {
      res.status(403).json(publicError("LAB-403"));
      return;
    }
    res.json({ id: ticket.id, title: ticket.title, status: ticket.status });
  });

  app.post("/api/tickets", (req, res) => {
    const actor = actorFrom(req);
    if (!actor) {
      res.status(401).json(publicError("LAB-401"));
      return;
    }
    const checked = validateTicket(req.body);
    if (!checked.ok) {
      res.status(400).json({ error: "Данные заявки не прошли проверку.", fields: checked.errors });
      return;
    }
    const created = {
      id: `ticket-${String(tickets.length + 1).padStart(2, "0")}`,
      ownerId: actor.id,
      ...checked.value,
    };
    tickets.push(created);
    res.status(201).json({ id: created.id });
  });

  app.get("/comments/preview", (req, res) => {
    const text = escapeHtml(req.query.text ?? "");
    res.type("html").send(`<!doctype html><meta charset="utf-8"><p>${text}</p>`);
  });

  app.use((error, _req, res, _next) => {
    auditEvent({ action: "unhandled", message: error?.message || "error" });
    res.status(500).json(publicError("LAB-500"));
  });

  return app;
}

function cookieHeader(name, value) {
  const options = sessionCookieOptions({ secure: process.env.LAB_SECURE === "1" });
  const parts = [`${name}=${encodeURIComponent(value)}`, "Path=/"];
  if (options.httpOnly) parts.push("HttpOnly");
  if (options.secure) parts.push("Secure");
  parts.push("SameSite=Lax");
  return parts.join("; ");
}

const isDirectRun = process.argv[1] && process.argv[1].endsWith("server.js");
if (isDirectRun) {
  const port = Number(process.env.PORT || 3000);
  createApp().listen(port, "127.0.0.1", () => {
    console.log(`Учебный стенд: http://127.0.0.1:${port}`);
  });
}
