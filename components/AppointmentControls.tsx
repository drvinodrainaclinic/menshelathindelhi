"use client";

import { useTransition } from "react";
import { updateAppointmentStatusAction, deleteAppointmentAction } from "@/lib/actions";

const STATUSES = ["new", "contacted", "confirmed", "done", "cancelled"];

export function AppointmentControls({ id, status }: { id: number; status: string }) {
  const [pending, startTransition] = useTransition();

  return (
    <div className="flex items-center gap-2">
      <select
        defaultValue={status}
        disabled={pending}
        onChange={(e) => {
          const formData = new FormData();
          formData.set("id", String(id));
          formData.set("status", e.target.value);
          startTransition(() => updateAppointmentStatusAction(formData));
        }}
        className="border border-black/15 rounded-md px-2 py-1 text-xs"
      >
        {STATUSES.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
      <form
        action={(formData) => {
          if (!confirm("Delete this appointment?")) return;
          startTransition(() => deleteAppointmentAction(formData));
        }}
      >
        <input type="hidden" name="id" value={String(id)} />
        <button
          type="submit"
          disabled={pending}
          className="btn btn-ghost !py-1 !px-2 text-xs text-brand hover:bg-brand hover:text-white"
        >
          Delete
        </button>
      </form>
    </div>
  );
}
