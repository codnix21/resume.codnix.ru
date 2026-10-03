import { createHash, generateKeyPairSync, sign, verify } from "node:crypto";

/** Учебная пара ключей создаётся в памяти и не является сертификатом удостоверяющего центра. */
export function createLearningKeyPair() {
  return generateKeyPairSync("ed25519");
}

export function digest(documentText) {
  return createHash("sha256").update(String(documentText), "utf8").digest();
}

export function signDigest(documentText, privateKey) {
  return sign(null, digest(documentText), privateKey).toString("hex");
}

export function verifyDigest(documentText, signatureHex, publicKey) {
  return verify(null, digest(documentText), publicKey, Buffer.from(signatureHex, "hex"));
}
