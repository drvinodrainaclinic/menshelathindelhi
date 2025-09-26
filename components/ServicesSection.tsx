import FeatureCard from "@/components/FeatureCard";

export default function ServicesSection() {
  return (
    <section className="section">
      <div className="flex items-end justify-between gap-4 mb-6">
        <div>
          <span className="badge">Services</span>
          <h2 className="mt-3 text-3xl font-semibold">Comprehensive HIV & Sexual Health Care</h2>
          <p className="mt-2 text-foreground/80 max-w-prose">
            From screening and counselling to PrEP, PEP, and STI testing and treatment, our approach blends
            clinical excellence with human connection.
          </p>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <FeatureCard title="HIV Treatment" description="ART initiation, monitoring, side‑effect management, and long‑term follow‑up." />
        <FeatureCard title="PrEP & PEP" description="Pre‑exposure prevention and urgent post‑exposure prophylaxis within 72 hours." />
        <FeatureCard title="STI Testing & Care" description="Confidential screening, accurate diagnosis, and guideline‑based treatment." />
      </div>
    </section>
  );
}
