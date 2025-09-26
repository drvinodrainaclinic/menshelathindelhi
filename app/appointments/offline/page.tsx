import Breadcrumbs from "@/components/Breadcrumbs";
import AppointmentForm from "@/components/AppointmentForm";

export const metadata = {
  title: "Clinic Visit Appointment | Dr. Vinod Raina Clinic",
  description: "Book an in‑clinic visit with our doctors in South Delhi.",
};

export default function OfflineAppointmentPage() {
  return (
    <div className="container-page section">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/appointments", label: "Appointments" }, { label: "Clinic Visit" }]} />
      <h1 className="text-3xl font-semibold mb-2">Clinic Visit Appointment</h1>
      <p className="text-foreground/80 mb-6 max-w-prose">Book an in‑person appointment at our South Delhi clinic. If you prefer, you can pay at the clinic reception.</p>
      <div className="max-w-2xl">
        <AppointmentForm />
      </div>
    </div>
  );
}
