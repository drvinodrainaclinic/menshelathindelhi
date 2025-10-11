import { NextResponse } from "next/server";

export const runtime = "nodejs";

// Appointments API disabled. Direct users to WhatsApp/Call.

// No types needed as this endpoint is gone.

// No storage used.

export async function POST() {
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
