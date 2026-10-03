/**
 * Учебный набор заголовков ответа.
 * Content-Security-Policy здесь намеренно строгая и годится только для стенда без внешних сценариев.
 * Для другого приложения политику нужно составить отдельно.
 */
export function securityHeaders() {
  return {
    "Content-Security-Policy": "default-src 'self'",
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "no-referrer",
  };
}

export function applySecurityHeaders(res) {
  const headers = securityHeaders();
  for (const [name, value] of Object.entries(headers)) {
    res.setHeader(name, value);
  }
}
