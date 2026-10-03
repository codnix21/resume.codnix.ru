import path from "node:path";

const ALLOWED = new Set([".pdf", ".png", ".txt"]);

/**
 * Имя файла не берётся у пользователя.
 * Расширение допускается только из списка, путь не выходит из каталога хранилища.
 */
export function storedFileName(originalName, id) {
  const extension = path.extname(String(originalName || "")).toLowerCase();
  if (!ALLOWED.has(extension)) {
    const error = new Error("Тип файла не входит в разрешённый список.");
    error.publicCode = "LAB-415";
    throw error;
  }
  if (!/^[a-z0-9-]{8,40}$/.test(id)) {
    throw new Error("Идентификатор файла учебного стенда задан неверно.");
  }
  return `${id}${extension}`;
}

export function resolveStoredPath(storageDir, storedName) {
  const base = path.resolve(storageDir);
  const full = path.resolve(base, storedName);
  if (!full.startsWith(base + path.sep)) {
    const error = new Error("Путь выходит за каталог хранилища.");
    error.publicCode = "LAB-415";
    throw error;
  }
  return full;
}
