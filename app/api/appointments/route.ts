import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

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

    const raw = await fs.readFile(dataFile, "utf-8");
    const items = (JSON.parse(raw) as unknown as AppointmentItem[]) || [];
    const item = {
      id: Date.now(),
      name,
      email,
      phone,
      date,
      time,
      service,
      message: message || "",
      createdAt: new Date().toISOString(),
    };
    items.push(item);
    await fs.writeFile(dataFile, JSON.stringify(items, null, 2), "utf-8");
    return NextResponse.json({ message: "Saved", item }, { status: 201 });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "Server error";
    return NextResponse.json({ message }, { status: 500 });
  }
}

export async function GET() {
  try {
    await ensureDataFile();
    const raw = await fs.readFile(dataFile, "utf-8");
    const items = (JSON.parse(raw) as unknown as AppointmentItem[]) || [];
    return NextResponse.json({ items });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "Server error";
    return NextResponse.json({ message }, { status: 500 });
  }
}
