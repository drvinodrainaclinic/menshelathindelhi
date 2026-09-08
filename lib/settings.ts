import { sql, ensureSettingsTable } from "@/lib/db";

export const DEFAULT_SETTINGS = {
  clinicName: "Dr. Vinod Raina Clinic",
  phone: "+91 98716 05858",
  phoneAlt: "+91 76878 78787",
  email: "drvinodbhartiraina@gmail.com",
  whatsapp: "919871605858",
  address: "E-34, EKTA APARTMENT, Saket, Near Opposite, Malviya Nagar Metro Station, New Delhi - 110017",
  hours: "Mon–Sat 10AM–7PM, Sun 12PM–3PM",
} as const;

export type SiteSettings = Record<string, string>;

export async function getSettings(): Promise<SiteSettings> {
  const result: SiteSettings = { ...DEFAULT_SETTINGS };
  if (!sql) return result;
  await ensureSettingsTable();
  try {
    const rows = await sql`SELECT key, value FROM site_settings` as unknown as { key: string; value: string }[];
    for (const row of rows) {
      result[row.key] = row.value;
    }
  } catch {
    // ignore
  }
  return result;
}
