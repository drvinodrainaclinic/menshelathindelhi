import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "Online Consultation | Contact via WhatsApp/Call",
  description: "Connect via WhatsApp or Call for online consultations.",
};

export default function OnlineAppointmentPage() {
  return (
    <div className="container-page section">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/appointments", label: "Appointments" }, { label: "Online" }]} />
      <h1 className="text-3xl font-semibold mb-2">Online Consultation</h1>
      <p className="text-foreground/80 mb-6 max-w-prose">We now schedule online consultations via WhatsApp or phone only. Please use the options below to connect.</p>
      <div className="card max-w-xl">
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            className="btn btn-primary"
            href="https://wa.me/919871605858?text=Hello%20Doctor%2C%20I%20would%20like%20to%20book%20an%20online%20consultation."
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp
          </a>
          <a className="btn btn-ghost" href="tel:+919871605858">Call +91 98716 05858</a>
        </div>
        <p className="text-xs text-foreground/60 mt-3">No online forms are required. Reach out directly to fix a convenient time.</p>
      </div>
    </div>
  );
}
