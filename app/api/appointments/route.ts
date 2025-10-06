import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { sql, ensureAppointmentsTable } from "@/lib/db";
import { hasEmailConfig, sendAppointmentEmail } from "@/lib/email";

export const runtime = "nodejs";

const dataDir = path.join(process.cwd(), "data");
const dataFile = path.join(dataDir, "appointments.json");

type AppointmentItem = {
  id: number;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  message: string;
  createdAt: string;
};

type AppointmentBody = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  message?: string;
};

async function ensureDataFile() {
  try {
    await fs.mkdir(dataDir, { recursive: true });
    await fs.access(dataFile);
  } catch {
    await fs.writeFile(dataFile, JSON.stringify([]), "utf-8");
  }
}

export async function POST(req: NextRequest) {
  try {
    await ensureDataFile();
    const body = (await req.json()) as Partial<AppointmentBody> | null;
    const { name, email, phone, date, time, service, message } = body || {};

    if (!name || !email || !phone || !date || !time || !service) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    // Try DB first if configured; fallback to file storage otherwise
    let saved: AppointmentItem | null = null;
    const useDb = Boolean(sql && process.env.DATABASE_URL);
    if (useDb) {
      await ensureAppointmentsTable();
      const inserted = await sql!<{
        id: number;
        created_at: string;
      }[]>`
        INSERT INTO appointments (name, email, phone, date, time, service, message)
        VALUES (${name!}, ${email!}, ${phone!}, ${date!}, ${time!}, ${service!}, ${message || ""})
        RETURNING id, created_at
      `;
      const row = inserted[0];
      saved = {
        id: Number(row.id),
        name: name!,
        email: email!,
        phone: phone!,
        date: date!,
        time: time!,
        service: service!,
        message: message || "",
        createdAt: row.created_at,
      };
    } else {
      const raw = await fs.readFile(dataFile, "utf-8");
      const items = (JSON.parse(raw) as unknown as AppointmentItem[]) || [];
      const item = {
        id: Date.now(),
        name: name!,
        email: email!,
        phone: phone!,
        date: date!,
        time: time!,
        service: service!,
        message: message || "",
        createdAt: new Date().toISOString(),
      };
      items.push(item);
      await fs.writeFile(dataFile, JSON.stringify(items, null, 2), "utf-8");
      saved = item;
    }

    // Best-effort email notification (do not fail request if email fails)
    if (hasEmailConfig()) {
      try {
        await sendAppointmentEmail({
          name: name!,
          email: email!,
          phone: phone!,
          date: date!,
          time: time!,
          service: service!,
          message: message || "",
          to: process.env.EMAIL_TO || "menshealthindelhi@gmail.com",
        });
      } catch (e) {
        // swallow email error, but log to console on server
        console.error("Email send failed:", e);
      }
    }

    return NextResponse.json({ message: "Saved", item: saved }, { status: 201 });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "Server error";
    return NextResponse.json({ message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const useDb = Boolean(sql && process.env.DATABASE_URL);
    if (useDb) {
      await ensureAppointmentsTable();
      const rows = await sql!<{
        id: number;
        name: string;
        email: string;
        phone: string;
        date: string;
        time: string;
        service: string;
        message: string | null;
        created_at: string;
      }[]>`SELECT id, name, email, phone, TO_CHAR(date, 'YYYY-MM-DD') as date, time, service, message, created_at FROM appointments ORDER BY created_at DESC`;
      const items: AppointmentItem[] = rows.map((r: {
        id: number;
        name: string;
        email: string;
        phone: string;
        date: string;
        time: string;
        service: string;
        message: string | null;
        created_at: string;
      }) => ({
        id: Number(r.id),
        name: r.name,
        email: r.email,
        phone: r.phone,
        date: r.date,
        time: r.time,
        service: r.service,
        message: r.message || "",
        createdAt: r.created_at,
      }));
      return NextResponse.json({ items });
    } else {
      await ensureDataFile();
      const raw = await fs.readFile(dataFile, "utf-8");
      const items = (JSON.parse(raw) as unknown as AppointmentItem[]) || [];
      return NextResponse.json({ items });
    }
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "Server error";
    return NextResponse.json({ message }, { status: 500 });
  }
}
