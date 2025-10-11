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
  // Appointments via form are disabled. Direct users to WhatsApp/Call.
  return NextResponse.json(
    {
      message:
        "Online appointment form is disabled. Please contact us via WhatsApp or Call at +919871605858.",
      whatsapp: "https://wa.me/919871605858",
      tel: "+919871605858",
    },
    { status: 410 }
  );
}

export async function GET() {
  // Reading appointments is disabled.
  return NextResponse.json(
    {
      message:
        "Appointments endpoint is disabled. Please contact via WhatsApp or Call at +919871605858.",
      whatsapp: "https://wa.me/919871605858",
      tel: "+919871605858",
    },
    { status: 410 }
  );
}
