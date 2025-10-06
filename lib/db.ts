import { neon } from "@neondatabase/serverless";

// Use Neon connection string from env. If missing, sql will be null and API will fallback to file storage.
const connectionString = process.env.DATABASE_URL;

export const sql = connectionString ? neon(connectionString) : null as unknown as ReturnType<typeof neon> | null;

export async function ensureAppointmentsTable() {
  if (!sql) return;
  // Create table if it doesn't exist. Safe to run on cold starts.
  await sql`CREATE TABLE IF NOT EXISTS appointments (
    id BIGSERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    date DATE NOT NULL,
    time TEXT NOT NULL,
    service TEXT NOT NULL,
    message TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
  )`;
}
