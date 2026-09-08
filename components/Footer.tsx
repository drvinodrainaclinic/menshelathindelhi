import { getSettings } from "@/lib/settings";

export default async function Footer() {
  const s = await getSettings();

  return (
    <footer className="border-t border-black/10 dark:border-white/10 mt-16 bg-[var(--muted)] dark:bg-[var(--muted-2)]/40">
      <div className="container-page py-10 text-sm text-foreground/80 grid gap-8 lg:grid-cols-4">
        <div>
          <p className="font-medium text-foreground">{s.clinicName}</p>
          <p>HIV Treatment & Sexual Health</p>
          <p className="mt-2 text-foreground/70">
            Compassionate, confidential care for HIV treatment, prevention, and sexual wellness.
          </p>
        </div>

        <div>
          <p className="font-medium text-foreground">Our Contacts</p>
          <address className="not-italic mt-2 space-y-2">
            <p>{s.address}</p>
            <p>
              <a className="hover:text-[var(--brand)]" href={`tel:${s.phoneAlt || s.phone}`}>{s.phoneAlt || s.phone}</a>
              {s.phoneAlt && s.phoneAlt !== s.phone && (
                <>
                  {", "}
                  <a className="hover:text-[var(--brand)]" href={`tel:${s.phone}`}>{s.phone}</a>
                </>
              )}
            </p>
            <p>
              <a className="hover:text-[var(--brand)]" href={`mailto:${s.email}`}>{s.email}</a>
            </p>
          </address>
        </div>

        <div>
          <p className="font-medium text-foreground">Hours</p>
          <p className="mt-2">{s.hours}</p>
        </div>

        <div>
          <p className="font-medium text-foreground">Dr. Vinod Raina Awards</p>
          <ul className="mt-2 space-y-1 list-disc pl-5">
            <li>&quot;Dr. B.R. Ambedkar, Seva Ratna Award&quot; 2012 for Best Sexologist doctor in Delhi</li>
            <li>&quot;Best Sexologist in Delhi 2012&quot; by Prime Time Research Media</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-black/10 dark:border-white/10">
        <div className="container-page py-4 text-xs text-foreground/60 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Dr. Vinod Raina Clinic. All rights reserved.</p>
          <p>Built with Next.js · <a className="hover:text-[var(--brand)]" href="/appointments">Book Appointment</a></p>
        </div>
      </div>
    </footer>
  );
}
