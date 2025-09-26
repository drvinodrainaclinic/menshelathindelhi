import Breadcrumbs from "@/components/Breadcrumbs";
import AppointmentForm from "@/components/AppointmentForm";
import PaymentSection from "@/components/PaymentSection";

export const metadata = {
  title: "Online Appointment | Dr. Vinod Raina Clinic",
  description: "Book a secure online consultation at a time that suits you.",
};

export default function OnlineAppointmentPage() {
  return (
    <div className="container-page section">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/appointments", label: "Appointments" }, { label: "Online" }]} />
      <h1 className="text-3xl font-semibold mb-2">Online Appointment</h1>
      <p className="text-foreground/80 mb-6 max-w-prose">Book a secure online consultation. Complete payment and submit your details—we’ll confirm your slot and share a private meeting link.</p>
      <PaymentSection />
      <div className="max-w-2xl">
        <AppointmentForm />
      </div>
    </div>
  );
}
