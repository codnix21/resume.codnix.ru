import { randomBytes, scrypt, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";

const scryptAsync = promisify(scrypt);
const KEY_LENGTH = 64;

/**
 * Учебное хранение пароля: случайная соль и scrypt из стандартной библиотеки Node.js.
 * Параметры scrypt оставлены стандартными для функции Node.js.
 * Это не рекомендация конкретной «сертифицированной» схемы для организации.
 */
export async function hashPassword(password) {
  if (typeof password !== "string" || password.length < 8) {
    throw new Error("Пароль учебного стенда должен быть строкой не короче 8 символов.");
  }
  const salt = randomBytes(16);
  const key = await scryptAsync(password, salt, KEY_LENGTH);
  return `scrypt$${salt.toString("hex")}$${Buffer.from(key).toString("hex")}`;
}

export async function verifyPassword(password, stored) {
  const parts = typeof stored === "string" ? stored.split("$") : [];
  if (parts.length !== 3 || parts[0] !== "scrypt") return false;
  const salt = Buffer.from(parts[1], "hex");
  const expected = Buffer.from(parts[2], "hex");
  if (salt.length !== 16 || expected.length !== KEY_LENGTH) return false;
  const actual = Buffer.from(await scryptAsync(password, salt, KEY_LENGTH));
  return timingSafeEqual(actual, expected);
}
