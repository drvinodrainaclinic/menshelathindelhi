import AppointmentForm from "@/components/AppointmentForm";
import PaymentSection from "@/components/PaymentSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import Image from "next/image";

export const metadata = {
  title: "Book Appointment | Dr. Vinod Raina Clinic",
  description: "Request an appointment for HIV treatment or sexual health services.",
};

export default function AppointmentsPage() {
  return (
    <div className="container-page section">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Appointments" }]} />
      <h1 className="text-3xl font-semibold mb-2">Book an Appointment</h1>
      <p className="text-foreground/80 mb-6 max-w-3xl">
        Fill out the form below and our team will contact you to confirm your appointment
        details. Your information is confidential and handled securely.
      </p>
      <div className="rounded-xl overflow-hidden border border-black/10 mb-8 relative h-40 sm:h-60">
        <Image
          src="https://picsum.photos/seed/appointments-hero/1600/600"
          alt="Appointments"
          fill
          sizes="(max-width: 640px) 100vw, 1200px"
          className="object-cover"
        />
      </div>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">How It Works</h2>
        <ul className="grid gap-1 text-sm text-foreground/80 list-disc pl-5">
          <li>Request a preferred date and time—online, any day.</li>
          <li>We confirm your slot by phone or email.</li>
          <li>Visits are confidential, respectful, and clearly explained.</li>
        </ul>
      </section>
      <PaymentSection />
      <div className="max-w-2xl">
        <AppointmentForm />
      </div>
    </div>
  );
}
