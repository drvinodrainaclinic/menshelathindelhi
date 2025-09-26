import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import FAQ from "@/components/FAQ";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import AboutDoctorSection from "@/components/AboutDoctorSection";
import ServicesSection from "@/components/ServicesSection";
import TreatmentSection from "@/components/TreatmentSection";
import ProcessSection from "@/components/ProcessSection";

export default function Home() {
  return (
    <div className="container-page section">
      <Hero />

      {/* About Doctor */}
      <AboutDoctorSection />

      {/* Services */}
      <ServicesSection />

      {/* Treatment Overview */}
      <TreatmentSection />

      {/* Treatment Process / How it Works */}
      <ProcessSection />

      <section className="grid gap-4 sm:grid-cols-3 mb-16">
        <div className="animate-slide-up animate-delay-1">
          <FeatureCard
            title="Comprehensive HIV Care"
            description="ART initiation, monitoring, counselling, and long‑term follow‑up."
          />
        </div>
        <div className="animate-slide-up animate-delay-2">
          <FeatureCard
            title="Sexual Health & Wellness"
            description="STI testing and treatment, PrEP/PEP, and confidential guidance."
          />
        </div>
        <div className="animate-slide-up animate-delay-3">
          <FeatureCard
            title="Discreet & Compassionate"
            description="Private, judgement‑free care with a focus on patient dignity."
          />
        </div>
      </section>

      <section className="my-16">
        <h2 className="text-2xl font-semibold mb-4">Testimonials / Survivor Stories</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <TestimonialCard name="A.K." quote="The clinic staff made me feel safe and respected from day one." />
          <TestimonialCard name="R.S." quote="Clear guidance on PrEP and excellent follow‑up support." />
          <TestimonialCard name="M.P." quote="Professional, compassionate, and highly knowledgeable doctors." />
        </div>
      </section>

      <FAQ />
      <CTASection />
    </div>
  );
}
