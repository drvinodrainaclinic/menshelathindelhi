"use client";

import { useState } from "react";

export default function AppointmentForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    setErrors({});

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    // Client-side validation
    const nextErrors: Record<string, string> = {};
    if (!payload.name) nextErrors.name = "Please enter your full name.";
    if (!payload.email) nextErrors.email = "Please enter a valid email address.";
    if (!payload.phone) nextErrors.phone = "Please enter your phone number.";
    if (!payload.date) nextErrors.date = "Please select a preferred date.";
    if (!payload.time) nextErrors.time = "Please select a preferred time.";
    if (!payload.service) nextErrors.service = "Please choose a service.";
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to submit");
      setStatus("Appointment request submitted successfully. We will contact you shortly.");
      (e.currentTarget as HTMLFormElement).reset();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setStatus(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card grid gap-4">
      {/* Progress indicator */}
      <div className="mb-2">
        <div className="h-1 w-full bg-black/10 rounded">
          <div className={`h-1 bg-[var(--brand)] rounded transition-all ${loading ? 'w-3/4 animate-pulse' : 'w-1/3'}`} />
        </div>
        <p className="sr-only">Form progress</p>
      </div>
      <div className="grid gap-1">
        <label htmlFor="name" className="text-sm">Full Name*</label>
        <input id="name" name="name" required aria-invalid={!!errors.name} aria-describedby="name-error" className="border border-black/10 rounded px-3 py-2 bg-white/70 focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent" />
        {errors.name && <p id="name-error" className="text-xs text-red-600">{errors.name}</p>}
      </div>
      <div className="grid gap-1 sm:grid-cols-2 sm:gap-4">
        <div className="grid gap-1">
          <label htmlFor="email" className="text-sm">Email*</label>
          <input id="email" name="email" type="email" required aria-invalid={!!errors.email} aria-describedby="email-error" className="border border-black/10 rounded px-3 py-2 bg-white/70 focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent" />
          {errors.email && <p id="email-error" className="text-xs text-red-600">{errors.email}</p>}
        </div>
        <div className="grid gap-1">
          <label htmlFor="phone" className="text-sm">Phone*</label>
          <input id="phone" name="phone" required aria-invalid={!!errors.phone} aria-describedby="phone-error" className="border border-black/10 rounded px-3 py-2 bg-white/70 focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent" />
          {errors.phone && <p id="phone-error" className="text-xs text-red-600">{errors.phone}</p>}
        </div>
      </div>
      <div className="grid gap-1 sm:grid-cols-2 sm:gap-4">
        <div className="grid gap-1">
          <label htmlFor="date" className="text-sm">Preferred Date*</label>
          <input id="date" name="date" type="date" required aria-invalid={!!errors.date} aria-describedby="date-error" className="border border-black/10 rounded px-3 py-2 bg-white/70 focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent" />
          {errors.date && <p id="date-error" className="text-xs text-red-600">{errors.date}</p>}
        </div>
        <div className="grid gap-1">
          <label htmlFor="time" className="text-sm">Preferred Time*</label>
          <input id="time" name="time" type="time" required aria-invalid={!!errors.time} aria-describedby="time-error" className="border border-black/10 rounded px-3 py-2 bg-white/70 focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent" />
          {errors.time && <p id="time-error" className="text-xs text-red-600">{errors.time}</p>}
        </div>
      </div>
      <div className="grid gap-1">
        <label htmlFor="service" className="text-sm">Service*</label>
        <select id="service" name="service" required aria-invalid={!!errors.service} aria-describedby="service-error" className="border border-black/10 rounded px-3 py-2 bg-white/70 focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent">
          <option value="">Select a service</option>
          <option>HIV Treatment</option>
          <option>Sexual Health</option>
          <option>PrEP/PEP</option>
          <option>STI Testing</option>
        </select>
        {errors.service && <p id="service-error" className="text-xs text-red-600">{errors.service}</p>}
      </div>
      <div className="grid gap-1">
        <label htmlFor="message" className="text-sm">Additional Details</label>
        <textarea id="message" name="message" rows={4} className="border border-black/10 rounded px-3 py-2 bg-white/70 focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent" />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="btn btn-primary px-4 py-2 disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Book Appointment"}
      </button>
      {status && <p className="text-sm text-foreground/80">{status}</p>}
      <p className="text-xs text-foreground/60">Note: This stores your request locally for demo purposes. Integrate email/DB for production.</p>
    </form>
  );
}

