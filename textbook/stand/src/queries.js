/**
 * Безопасное обращение к PostgreSQL: текст запроса не зависит от данных.
 * Плейсхолдер $1 — синтаксис PostgreSQL. Драйвер передаёт значение отдельно.
 */
export function findUserByEmail(email) {
  return {
    text: "SELECT id, email, role FROM users WHERE email = $1",
    values: [email],
  };
}

export function insertTicket(ownerId, title, description) {
  return {
    text: "INSERT INTO tickets (owner_id, title, description) VALUES ($1, $2, $3) RETURNING id",
    values: [ownerId, title, description],
  };
}

/**
 * Образец дефекта: данные встроены в текст команды.
 * Функция нужна только для сравнения в тесте и не выполняется в базе.
 */
export function unsafeFindUserByEmail(email) {
  return {
    text: `SELECT id, email, role FROM users WHERE email = '${email}'`,
    values: [],
  };
}
