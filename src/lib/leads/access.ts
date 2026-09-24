import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const LEADS_SESSION_COOKIE = "md-leads-session";
export const LEADS_SESSION_SECONDS = 60 * 60 * 8;

function sessionSignature(expiresAt: number) {
  const secret = process.env.LEADS_SESSION_SECRET;
  const tokenHash = process.env.LEADS_ACCESS_TOKEN_HASH;
  if (!secret || !tokenHash) return null;
  return createHmac("sha256", secret).update(`${tokenHash}.${expiresAt}`).digest("hex");
}

export function isValidAccessToken(token: string) {
  const expected = process.env.LEADS_ACCESS_TOKEN_HASH;
  if (!expected || !/^[a-f0-9]{64}$/.test(expected) || !/^[a-f0-9]{64}$/.test(token)) return false;

  const actual = createHash("sha256").update(token).digest();
  return timingSafeEqual(actual, Buffer.from(expected, "hex"));
}

export function createLeadsSession() {
  const expiresAt = Math.floor(Date.now() / 1000) + LEADS_SESSION_SECONDS;
  const signature = sessionSignature(expiresAt);
  if (!signature) return null;
  return `v1.${expiresAt}.${signature}`;
}

export async function hasLeadsSession() {
  const value = (await cookies()).get(LEADS_SESSION_COOKIE)?.value;
  const match = /^v1\.(\d+)\.([a-f0-9]{64})$/.exec(value ?? "");
  if (!match || Number(match[1]) <= Math.floor(Date.now() / 1000)) return false;

  const expected = sessionSignature(Number(match[1]));
  if (!expected) return false;
  return timingSafeEqual(Buffer.from(match[2], "hex"), Buffer.from(expected, "hex"));
}
