/**
 * Контекстное экранирование для HTML-текста.
 * Порядок замены важен: амперсанд обрабатывается первым,
 * иначе последующие подстановки будут экранированы повторно.
 * Функция предназначена для текста между тегами, а не для URL,
 * атрибутов JavaScript или CSS.
 */
export function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

/** Небезопасный образец для сравнения на занятии. Не подключать к серверу. */
export function unsafeHtml(value) {
  return String(value);
}
