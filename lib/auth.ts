import { cookies } from "next/headers";
import { createHash, timingSafeEqual } from "crypto";

export const ADMIN_COOKIE = "admin_session";
export const SESSION_HOURS = 12;

const SESSION_SECRET = process.env.ADMIN_SESSION_SECRET || "dev-session-secret-change-me";

export function verifyAdminPassword(password: string): boolean {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;
  // Constant-time comparison of hashes to avoid leaking length/timing.
  const a = createHash("sha256").update(password).digest();
  const b = createHash("sha256").update(expected).digest();
  return a.length === b.length && timingSafeEqual(a, b);
}

export function signSession(): string {
  const payload = `admin:${Math.floor(Date.now() / 1000 + SESSION_HOURS * 3600)}`;
  const sig = createHash("sha256")
    .update(`${payload}.${SESSION_SECRET}`)
    .digest("hex");
  return `${payload}.${sig}`;
}

function isValidSignature(token: string): boolean {
  const [payload, sig] = token.split(".");
  if (!payload || !sig) return false;
  const expected = createHash("sha256")
    .update(`${payload}.${SESSION_SECRET}`)
    .digest("hex");
  const a = Buffer.from(expected, "hex");
  const b = Buffer.from(sig, "hex");
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export async function isAdmin(): Promise<boolean> {
  const store = await cookies();
  const token = store.get(ADMIN_COOKIE)?.value;
  if (!token || !isValidSignature(token)) return false;
  // Check expiry embedded in payload.
  const exp = Number(token.split(".")[0].split(":")[1]);
  return !Number.isNaN(exp) && exp > Math.floor(Date.now() / 1000);
}

export async function requireAdmin(): Promise<boolean> {
  return isAdmin();
}
