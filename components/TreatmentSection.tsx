import Image from "next/image";
import FeatureCard from "@/components/FeatureCard";

export default function TreatmentSection() {
  return (
    <section className="section">
      <div className="grid gap-8 sm:grid-cols-2 sm:items-center">
        <div>
          <span className="badge">Treatment</span>
          <h2 className="mt-3 text-3xl font-semibold">HIV Treatment & Ongoing Care</h2>
          <p className="mt-3 text-foreground/80 max-w-prose">
            Initiating ART early supports viral suppression, improved immune function, and quality of life.
            We help you choose the right regimen, monitor response, and support adherence through practical strategies.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 mt-4">
            <FeatureCard title="ART Management" description="Personalized regimens, side‑effect support, regular monitoring." />
            <FeatureCard title="Continuity of Care" description="Adjustments over time and coordination with specialists as needed." />
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 relative h-72 sm:h-[24rem] bg-white/60 dark:bg-black/40">
          <Image src="https://picsum.photos/seed/treatment-overview/1600/1200" alt="Treatment overview" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}
