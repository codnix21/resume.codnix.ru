/**
 * Защитная граница размера запроса. Это не испытание на отказ в обслуживании.
 * Стенд отклоняет слишком большой учебный запрос и записывает код причины.
 */
export function checkBodyLimit(byteLength, limit = 16 * 1024) {
  if (!Number.isInteger(byteLength) || byteLength < 0) {
    return { ok: false, code: "LAB-400" };
  }
  if (byteLength > limit) {
    return { ok: false, code: "LAB-413" };
  }
  return { ok: true, code: null };
}
