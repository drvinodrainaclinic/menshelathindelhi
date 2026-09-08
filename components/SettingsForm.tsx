"use client";

import { useActionState } from "react";
import { saveSettingsAction } from "@/lib/actions";

const FIELDS: { key: string; label: string; placeholder?: string }[] = [
  { key: "clinicName", label: "Clinic Name" },
  { key: "phone", label: "Primary Phone", placeholder: "+91 98716 05858" },
  { key: "phoneAlt", label: "Secondary Phone", placeholder: "+91 76878 78787" },
  { key: "whatsapp", label: "WhatsApp Number (digits only)", placeholder: "919871605858" },
  { key: "email", label: "Email", placeholder: "clinic@example.com" },
  { key: "address", label: "Address", placeholder: "Street, Area, City - PIN" },
  { key: "hours", label: "Opening Hours", placeholder: "Mon–Sat 10AM–7PM" },
];

export function SettingsForm({ settings }: { settings: Record<string, string> }) {
  const [state, formAction, pending] = useActionState(saveSettingsAction, { ok: false });

  return (
    <form action={formAction} className="flex flex-col gap-4 max-w-2xl">
      {FIELDS.map((f) => (
        <label key={f.key} className="flex flex-col gap-1 text-sm">
          {f.label}
          <input
            name={f.key}
            defaultValue={settings[f.key] ?? ""}
            placeholder={f.placeholder}
            className="border border-black/15 rounded-md px-3 py-2 focus:outline-none focus:border-brand"
          />
        </label>
      ))}

      {state?.ok && <p className="text-sm text-emerald-600">Settings saved successfully.</p>}
      {state?.error && <p className="text-sm text-brand">{state.error}</p>}

      <button type="submit" disabled={pending} className="btn btn-primary">
        {pending ? "Saving…" : "Save Settings"}
      </button>
    </form>
  );
}
