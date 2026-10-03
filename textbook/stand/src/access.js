/**
 * Решение о доступе принимается по серверным сведениям об участнике и записи.
 * Идентификатор из запроса сам по себе права не даёт.
 */
export function canReadTicket(actor, ticket) {
  if (!actor || !ticket) return false;
  if (actor.role === "admin") return true;
  return actor.id === ticket.ownerId;
}

export function canChangeTicket(actor, ticket) {
  if (!actor || !ticket) return false;
  if (actor.role === "admin") return true;
  return actor.role === "operator" && actor.id === ticket.ownerId;
}
