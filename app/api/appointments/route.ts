import { NextRequest, NextResponse } from "next/server";
import { sql, ensureAppointmentsTable } from "@/lib/db";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  if (!sql) {
    return NextResponse.json(
      { message: "Appointments are temporarily unavailable. Please call or WhatsApp +919871605858." },
      { status: 503 }
    );
  }

  await ensureAppointmentsTable();

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const date = String(body.date ?? "").trim();
  const time = String(body.time ?? "").trim();
  const service = String(body.service ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !phone || !date) {
    return NextResponse.json(
      { message: "Name, phone, and date are required." },
      { status: 400 }
    );
  }

  try {
    await sql`
      INSERT INTO appointments (name, email, phone, date, time, service, message)
      VALUES (${name}, ${email}, ${phone}, ${date || null}, ${time}, ${service}, ${message || null})
    `;
  } catch (e) {
    console.error("appointments POST error", e);
    return NextResponse.json({ message: "Could not submit your appointment." }, { status: 500 });
  }

  return NextResponse.json({
    ok: true,
    message: "Your appointment request has been received. We will contact you shortly.",
  });
}

export async function GET() {
  // Public list is disabled for privacy.
  return NextResponse.json(
    { message: "Appointment listing is not public." },
    { status: 403 }
  );
}
