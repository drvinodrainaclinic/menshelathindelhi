import Breadcrumbs from "@/components/Breadcrumbs";
import Image from "next/image";

export const metadata = {
  title: "Contact | Dr. Vinod Raina Clinic",
  description: "Connect via WhatsApp or Call for appointments and queries.",
};

export default function AppointmentsPage() {
  return (
    <div className="container-page section">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Contact" }]} />
      <h1 className="text-3xl font-semibold mb-2">Connect with Us</h1>
      <p className="text-foreground/80 mb-6 max-w-3xl">
        We now take appointments and queries via WhatsApp and phone only. Tap a button below to start a chat or call directly.
      </p>
      <div className="rounded-xl overflow-hidden border border-black/10 mb-8 relative h-40 sm:h-60">
        <Image
          src="https://picsum.photos/seed/appointments-hero/1600/600"
          alt="Contact"
          fill
          sizes="(max-width: 640px) 100vw, 1200px"
          className="object-cover"
        />
      </div>
      <section className="card mb-8">
        <h2 className="text-xl font-semibold mb-3">Get in Touch</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://wa.me/919871605858?text=Hello%20Doctor%2C%20I%20would%20like%20to%20connect."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Chat on WhatsApp
          </a>
          <a
            href="tel:+919871605858"
            className="btn btn-ghost"
          >
            Call +91 98716 05858
          </a>
        </div>
        <p className="text-xs text-foreground/60 mt-3">For privacy, your details are not stored online. Use WhatsApp or call to schedule.
        </p>
      </section>
    </div>
  );
}
