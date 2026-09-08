import { neon } from "@neondatabase/serverless";

// Use Neon connection string from env. If missing, sql will be null and API will fallback to file storage.
const connectionString = process.env.DATABASE_URL;

export const sql = connectionString ? neon(connectionString) : null as unknown as ReturnType<typeof neon> | null;

export async function ensureAppointmentsTable() {
  if (!sql) return;
  await sql`CREATE TABLE IF NOT EXISTS appointments (
    id BIGSERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    date DATE NOT NULL,
    time TEXT NOT NULL,
    service TEXT NOT NULL,
    message TEXT,
    status TEXT NOT NULL DEFAULT 'new',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
  )`;
}

export async function ensureBlogTable() {
  if (!sql) return;
  await sql`CREATE TABLE IF NOT EXISTS blog_posts (
    id BIGSERIAL PRIMARY KEY,
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    date DATE NOT NULL DEFAULT CURRENT_DATE,
    excerpt TEXT NOT NULL,
    cover TEXT NOT NULL,
    tags TEXT[] NOT NULL DEFAULT '{}',
    html TEXT NOT NULL,
    published BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
  )`;
}

export async function ensureSettingsTable() {
  if (!sql) return;
  await sql`CREATE TABLE IF NOT EXISTS site_settings (
    key TEXT PRIMARY KEY,
    value TEXT NOT NULL DEFAULT '',
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
  )`;
}

export async function ensureAllTables() {
  await Promise.all([ensureAppointmentsTable(), ensureBlogTable(), ensureSettingsTable()]);
}

export type BlogRow = {
  id: number;
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  excerpt: string;
  cover: string;
  tags: string[];
  html: string;
  published: boolean;
  created_at: string;
  updated_at: string;
};

export type AppointmentRow = {
  id: number;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  message: string | null;
  status: string;
  created_at: string;
};
