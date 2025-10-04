import Breadcrumbs from "@/components/Breadcrumbs";
import Image from "next/image";

export const metadata = {
  title: "Privacy Policy | Dr. Vinod Raina Clinic",
  description: "How we protect your privacy and manage your information.",
};

export default function PrivacyPage() {
  return (
    <div className="container-page section">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Privacy" }]} />
      <h1 className="text-3xl font-semibold mb-2">Privacy Policy</h1>
      <p className="text-foreground/80 mb-6 max-w-prose">We protect your dignity and data at every step—online and in clinic.</p>
      <div className="rounded-xl overflow-hidden border border-black/10 mb-8 relative h-40 sm:h-60">
        <Image
          src="https://picsum.photos/seed/privacy-hero/1600/600"
          alt="Privacy"
          fill
          sizes="(max-width: 640px) 100vw, 1200px"
          className="object-cover"
        />
      </div>
      <div className="prose prose-slate">
        <p>
          We are committed to safeguarding your privacy. This policy explains how we collect, use, and
          protect your information. Replace this text with your legal counsel’s approved policy.
        </p>
        <h2>Data We Collect</h2>
        <ul>
          <li>Contact details (name, email, phone)</li>
          <li>Appointment preferences (date, time, service)</li>
        </ul>
        <h2>How We Use Data</h2>
        <ul>
          <li>To schedule and confirm appointments</li>
          <li>To deliver and improve clinical services</li>
        </ul>
      </div>
    </div>
  );
}
