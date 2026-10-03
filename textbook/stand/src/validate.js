const STATUSES = new Set(["new", "open", "closed"]);

/**
 * Серверная проверка заявки. Клиентская проверка эту функцию не заменяет.
 * Возвращает перечень полей, которые не прошли правило, без внутренних деталей.
 */
export function validateTicket(input) {
  const source = input && typeof input === "object" ? input : {};
  const errors = [];
  const title = typeof source.title === "string" ? source.title.trim() : "";
  const description = typeof source.description === "string" ? source.description.trim() : "";

  if (title.length < 3 || title.length > 120) errors.push("title");
  if (description.length < 1 || description.length > 2000) errors.push("description");
  if (!STATUSES.has(source.status)) errors.push("status");

  return {
    ok: errors.length === 0,
    errors,
    value: errors.length === 0 ? { title, description, status: source.status } : null,
  };
}
