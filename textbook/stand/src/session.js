/**
 * Параметры cookie сессии для учебного стенда.
 * secure включается там, где канал действительно HTTPS.
 * На локальном HTTP преподаватель явно передаёт secure: false и фиксирует это ограничение в отчёте.
 */
export function sessionCookieOptions({ secure }) {
  return {
    httpOnly: true,
    secure: Boolean(secure),
    sameSite: "lax",
    path: "/",
  };
}
