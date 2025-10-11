import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "Clinic Visit | Contact via WhatsApp/Call",
  description: "Connect via WhatsApp or Call to plan an in‑clinic visit.",
};

export default function OfflineAppointmentPage() {
  return (
    <div className="container-page section">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/appointments", label: "Appointments" }, { label: "Clinic Visit" }]} />
      <h1 className="text-3xl font-semibold mb-2">Clinic Visit</h1>
      <p className="text-foreground/80 mb-6 max-w-prose">We now schedule in‑person visits via WhatsApp or phone only. Please use the options below to connect and choose a convenient time.</p>
      <div className="card max-w-xl">
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            className="btn btn-primary"
            href="https://wa.me/919871605858?text=Hello%20Doctor%2C%20I%20would%20like%20to%20book%20a%20clinic%20visit."
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp
          </a>
          <a className="btn btn-ghost" href="tel:+919871605858">Call +91 98716 05858</a>
        </div>
        <p className="text-xs text-foreground/60 mt-3">No online forms are required. Reach out directly to schedule your visit.</p>
      </div>
    </div>
  );
}
