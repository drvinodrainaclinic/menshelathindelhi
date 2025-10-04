import FAQ from "@/components/FAQ";
import Breadcrumbs from "@/components/Breadcrumbs";
import Image from "next/image";

export const metadata = {
  title: "FAQs | Dr. Vinod Raina Clinic",
  description: "Frequently asked questions about appointments, privacy, and services.",
};

export default function FAQsPage() {
  return (
    <div className="container-page section">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "FAQs" }]} />
      <h1 className="text-3xl font-semibold mb-2">FAQs</h1>
      <p className="text-foreground/80 mb-6 max-w-prose">Quick answers to common questions about appointments, privacy, HIV treatment, prevention, and sexual wellness.</p>
      <div className="rounded-xl overflow-hidden border border-black/10 mb-8 relative h-40 sm:h-60">
        <Image
          src="https://picsum.photos/seed/faqs-hero/1600/600"
          alt="FAQs"
          fill
          sizes="(max-width: 640px) 100vw, 1200px"
          className="object-cover"
        />
      </div>
      <h2 className="text-xl font-semibold mb-2">General Questions</h2>
      <FAQ />
    </div>
  );
}
