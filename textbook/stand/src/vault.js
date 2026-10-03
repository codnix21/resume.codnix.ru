import { createCipheriv, createDecipheriv, randomBytes } from "node:crypto";

const ALGORITHM = "aes-256-gcm";

function keyFromHex(hex) {
  const key = Buffer.from(hex, "hex");
  if (key.length !== 32) {
    throw new Error("Ключ учебного хранилища должен содержать 32 байта в hex.");
  }
  return key;
}

/** Шифрует строку синтетических данных. Ключ передаётся снаружи и не записывается рядом с файлом. */
export function encryptString(plainText, keyHex) {
  const key = keyFromHex(keyHex);
  const iv = randomBytes(12);
  const cipher = createCipheriv(ALGORITHM, key, iv);
  const encrypted = Buffer.concat([cipher.update(String(plainText), "utf8"), cipher.final()]);
  const tag = cipher.getAuthTag();
  return {
    algorithm: ALGORITHM,
    iv: iv.toString("hex"),
    tag: tag.toString("hex"),
    data: encrypted.toString("hex"),
  };
}

export function decryptString(payload, keyHex) {
  const key = keyFromHex(keyHex);
  const decipher = createDecipheriv(ALGORITHM, key, Buffer.from(payload.iv, "hex"));
  decipher.setAuthTag(Buffer.from(payload.tag, "hex"));
  const plain = Buffer.concat([
    decipher.update(Buffer.from(payload.data, "hex")),
    decipher.final(),
  ]);
  return plain.toString("utf8");
}
