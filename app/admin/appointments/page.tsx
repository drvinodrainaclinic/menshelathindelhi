import { redirect } from "next/navigation";
import { getAppointmentsAction } from "@/lib/actions";
import { AppointmentControls } from "@/components/AppointmentControls";
import { isAdmin } from "@/lib/auth";

export default async function AdminAppointmentsPage() {
  if (!(await isAdmin())) redirect("/admin/login");

  const rows = await getAppointmentsAction();

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Appointment Inbox ({rows.length})</h2>

      {rows.length === 0 ? (
        <p className="text-foreground/70">No appointments yet. Requests will appear here.</p>
      ) : (
        <div className="space-y-3">
          {rows.map((a) => (
            <div key={a.id} className="card">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-semibold">{a.name}</p>
                  <p className="text-sm text-foreground/70">
                    {a.phone} {a.email && `· ${a.email}`}
                  </p>
                  <p className="text-sm text-foreground/70">
                    {new Date(a.date).toLocaleDateString()} {a.time && `at ${a.time}`} · {a.service}
                  </p>
                  {a.message && <p className="text-sm text-foreground/70 mt-1">{a.message}</p>}
                  <p className="text-xs text-foreground/50 mt-1">
                    Submitted {new Date(a.created_at).toLocaleString()} · Status: {a.status}
                  </p>
                </div>
                <AppointmentControls id={a.id} status={a.status} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
