const SECRET_KEYS = new Set(["password", "token", "cookie", "authorization", "secret"]);

/** Журнал хранит факт события, но не секреты. */
export function auditEvent(event) {
  const source = event && typeof event === "object" ? event : {};
  const safe = {};
  for (const [key, value] of Object.entries(source)) {
    if (SECRET_KEYS.has(key.toLowerCase())) {
      safe[key] = "[скрыто]";
    } else {
      safe[key] = value;
    }
  }
  return {
    at: new Date().toISOString(),
    ...safe,
  };
}
