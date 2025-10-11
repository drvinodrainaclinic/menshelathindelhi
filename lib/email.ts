// Email utilities are disabled. Provide safe stubs without external deps.

export function hasEmailConfig() {
  return false;
}

export function getTransport() {
  throw new Error("Email is disabled in this deployment");
}

export async function sendAppointmentEmail(_payload: {
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
  // no-op
  return;
}
