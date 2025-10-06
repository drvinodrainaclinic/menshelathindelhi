import nodemailer from "nodemailer";

const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
const smtpPort = parseInt(process.env.SMTP_PORT || "465", 10);
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;

export function hasEmailConfig() {
  return Boolean(smtpUser && smtpPass);
}

export function getTransport() {
  if (!hasEmailConfig()) throw new Error("SMTP not configured");
  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465, // true for 465, false for 587
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });
  return transporter;
}

export async function sendAppointmentEmail(payload: {
  to?: string;
  clinicTo?: string;
  subject?: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  message?: string;
}) {
  const clinicTo = payload.clinicTo || process.env.EMAIL_TO;
  const to = payload.to || clinicTo;
  if (!to) throw new Error("EMAIL_TO not set");
  const transporter = getTransport();
  const subject = payload.subject || `New appointment request: ${payload.name}`;
  const text = `New appointment request\n\nName: ${payload.name}\nEmail: ${payload.email}\nPhone: ${payload.phone}\nDate: ${payload.date}\nTime: ${payload.time}\nService: ${payload.service}\nMessage: ${payload.message || "-"}`;
  const html = `<p><strong>New appointment request</strong></p>
<p><strong>Name:</strong> ${payload.name}</p>
<p><strong>Email:</strong> ${payload.email}</p>
<p><strong>Phone:</strong> ${payload.phone}</p>
<p><strong>Date:</strong> ${payload.date}</p>
<p><strong>Time:</strong> ${payload.time}</p>
<p><strong>Service:</strong> ${payload.service}</p>
<p><strong>Message:</strong> ${payload.message || "-"}</p>`;

  const from = process.env.EMAIL_FROM || smtpUser!;

  await transporter.sendMail({ from, to, subject, text, html });
}
