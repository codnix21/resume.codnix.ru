/** Ответ клиенту не содержит стек, SQL и значения конфигурации. */
export function publicError(code = "LAB-500") {
  return {
    error: "Не удалось обработать запрос.",
    code,
  };
}

export function toPublicResult(error) {
  const known = error && typeof error.publicCode === "string" ? error.publicCode : "LAB-500";
  return publicError(known);
}
