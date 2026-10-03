import assert from "node:assert/strict";
import test from "node:test";
import { once } from "node:events";
import { escapeHtml, unsafeHtml } from "../src/escapeHtml.js";
import { findUserByEmail, insertTicket, unsafeFindUserByEmail } from "../src/queries.js";
import { canChangeTicket, canReadTicket } from "../src/access.js";
import { sessionCookieOptions } from "../src/session.js";
import { validateTicket } from "../src/validate.js";
import { publicError, toPublicResult } from "../src/errors.js";
import { securityHeaders } from "../src/headers.js";
import { auditEvent } from "../src/auditLog.js";
import { hashPassword, verifyPassword } from "../src/passwords.js";
import { decryptString, encryptString } from "../src/vault.js";
import { createLearningKeyPair, signDigest, verifyDigest } from "../src/signature.js";
import { resolveStoredPath, storedFileName } from "../src/files.js";
import { checkBodyLimit } from "../src/limits.js";
import { createApp } from "../src/server.js";

test("экранирование превращает разметку в текст", () => {
  const raw = "<note> & 'цитата'";
  assert.equal(unsafeHtml(raw), raw);
  assert.equal(escapeHtml(raw), "&lt;note&gt; &amp; &#39;цитата&#39;");
  assert.equal(escapeHtml("&lt;"), "&amp;lt;");
});

test("параметризованный запрос не включает данные в текст SQL", () => {
  const email = "student'@lab.test";
  const safe = findUserByEmail(email);
  const unsafe = unsafeFindUserByEmail(email);
  assert.equal(safe.text.includes(email), false);
  assert.deepEqual(safe.values, [email]);
  assert.equal(unsafe.text.includes(email), true);
  const insert = insertTicket("user-01", "Тема", "Описание");
  assert.equal(insert.text.includes("Тема"), false);
  assert.equal(insert.values.length, 3);
});

test("доступ к заявке проверяется на сервере", () => {
  const ticket = { id: "ticket-02", ownerId: "user-02" };
  assert.equal(canReadTicket({ id: "user-01", role: "student" }, ticket), false);
  assert.equal(canReadTicket({ id: "user-02", role: "student" }, ticket), true);
  assert.equal(canReadTicket({ id: "user-03", role: "admin" }, ticket), true);
  assert.equal(canReadTicket(null, ticket), false);
  assert.equal(canChangeTicket({ id: "user-02", role: "operator" }, ticket), true);
  assert.equal(canChangeTicket({ id: "user-01", role: "operator" }, ticket), false);
});

test("cookie сессии задаёт HttpOnly и зависит от HTTPS", () => {
  assert.equal(sessionCookieOptions({ secure: true }).httpOnly, true);
  assert.equal(sessionCookieOptions({ secure: true }).secure, true);
  assert.equal(sessionCookieOptions({ secure: false }).secure, false);
  assert.equal(sessionCookieOptions({ secure: true }).sameSite, "lax");
});

test("сервер отклоняет неверную заявку и принимает годную", () => {
  assert.deepEqual(validateTicket({ title: "А", description: "", status: "нет" }).errors.sort(), [
    "description",
    "status",
    "title",
  ]);
  const ok = validateTicket({ title: "  Заявка  ", description: "Текст", status: "new" });
  assert.equal(ok.ok, true);
  assert.equal(ok.value.title, "Заявка");
});

test("публичная ошибка не содержит внутренних сведений", () => {
  const body = toPublicResult(new Error("password=secret SELECT * FROM users"));
  assert.equal(JSON.stringify(body).includes("secret"), false);
  assert.equal(JSON.stringify(body).includes("SELECT"), false);
  assert.equal(publicError("LAB-404").code, "LAB-404");
});

test("заголовки и журнал не раскрывают лишнее", () => {
  const headers = securityHeaders();
  assert.equal(headers["X-Content-Type-Options"], "nosniff");
  const event = auditEvent({ action: "login", password: "secret-value", user: "user-01" });
  assert.equal(event.password, "[скрыто]");
  assert.equal(event.user, "user-01");
});

test("пароль проверяется без хранения исходной строки", async () => {
  const stored = await hashPassword("correct-horse");
  assert.equal(stored.includes("correct-horse"), false);
  assert.equal(await verifyPassword("correct-horse", stored), true);
  assert.equal(await verifyPassword("wrong-horse", stored), false);
});

test("хранилище расшифровывает только исходный текст", () => {
  const key = "11".repeat(32);
  const payload = encryptString("синтетическая запись", key);
  assert.equal(payload.data.includes("синтетическая"), false);
  assert.equal(decryptString(payload, key), "синтетическая запись");
});

test("подпись обнаруживает изменение документа", () => {
  const { publicKey, privateKey } = createLearningKeyPair();
  const signature = signDigest("протокол лабораторной", privateKey);
  assert.equal(verifyDigest("протокол лабораторной", signature, publicKey), true);
  assert.equal(verifyDigest("изменённый протокол", signature, publicKey), false);
});

test("имя файла не выходит из каталога и ограничено списком", () => {
  assert.equal(storedFileName("отчёт.txt", "abcd1234"), "abcd1234.txt");
  assert.throws(() => storedFileName("page.html", "abcd1234"));
  const full = resolveStoredPath("/tmp/lab-storage", "abcd1234.txt");
  assert.equal(full.endsWith("/abcd1234.txt"), true);
});

test("слишком большой запрос отклоняется без нагрузки на стенд", () => {
  assert.equal(checkBodyLimit(100).ok, true);
  assert.equal(checkBodyLimit(20 * 1024).code, "LAB-413");
});

test("HTTP-стенд скрывает чужую заявку и экранирует комментарий", async () => {
  const app = createApp();
  const server = app.listen(0, "127.0.0.1");
  await once(server, "listening");
  const { port } = server.address();
  const base = `http://127.0.0.1:${port}`;

  const denied = await fetch(`${base}/api/tickets/ticket-02`, {
    headers: { "x-lab-session": "lab-user-01" },
  });
  assert.equal(denied.status, 403);
  const deniedBody = await denied.json();
  assert.equal(Object.hasOwn(deniedBody, "stack"), false);

  const login = await fetch(`${base}/api/session`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: "student-b@lab.test" }),
  });
  assert.equal(login.status, 200);
  const allowed = await fetch(`${base}/api/tickets/ticket-02`, {
    headers: { "x-lab-session": "lab-user-02" },
  });
  assert.equal(allowed.status, 200);

  const preview = await fetch(`${base}/comments/preview?text=${encodeURIComponent("<b>заметка</b>")}`);
  const html = await preview.text();
  assert.equal(html.includes("<b>"), false);
  assert.equal(html.includes("&lt;b&gt;заметка&lt;/b&gt;"), true);
  assert.equal(preview.headers.get("x-content-type-options"), "nosniff");

  server.close();
});
