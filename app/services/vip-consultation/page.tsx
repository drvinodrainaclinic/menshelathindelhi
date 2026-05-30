import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "VIP Consultation | Dr. Vinod Raina Clinic",
  description: "Private VIP and Super VIP consultations with the highest confidentiality and convenience.",
};

function PriceCard({ title, subtitle, price, cta }: { title: string; subtitle: string; price: string; cta: string }) {
  return (
    <div className="card">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-foreground/80 mt-1">{subtitle}</p>
      <p className="text-2xl font-bold mt-3">{price}</p>
      <a href="/appointments" className="btn btn-primary mt-3">{cta}</a>
    </div>
  );
}

export default function VIPConsultationPage() {
  return (
    <div className="container-page section">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/services", label: "Services" }, { label: "VIP Consultation" }]} />
      <h1 className="text-3xl font-semibold mb-2">VIP Consultation</h1>
      <p className="text-foreground/80 max-w-prose mb-6">Private Consultation for VIP Patients with Dr. Vinod Raina. VIP consultations are ideal for celebrities and individuals seeking the highest level of confidentiality and privacy.</p>

      <section className="grid gap-6 sm:grid-cols-3">
        <PriceCard
          title="VIP Consultation (Only Sundays)"
          subtitle="Visit the clinic or take it online"
          price="₹10,000"
          cta="Book Now"
        />
        <PriceCard
          title="Super VIP Consultation (Pan India)"
          subtitle="Exclusive Doctor Consultation at 5-Star Hotels across India"
          price="₹50,000"
          cta="Book Now"
        />
        <PriceCard
          title="Super VIP Consultation (International)"
          subtitle="Exclusive Doctor Consultation at 5-Star Hotels (Worldwide)"
          price="₹100,000"
          cta="Book Now"
        />
      </section>

      <div className="section-tinted mt-8">
        <h2 className="text-xl font-semibold mb-2">How It Works</h2>
        <ol className="list-decimal pl-5 grid gap-1 text-sm text-foreground/80">
          <li>Choose a VIP package and tap Book Now.</li>
          <li>Complete the appointment form and payment.</li>
          <li>Our concierge coordinates venue, timing, and privacy needs.</li>
        </ol>
      </div>
    </div>
  );
}
