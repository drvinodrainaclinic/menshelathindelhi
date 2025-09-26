import Image from "next/image";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "PrEP & PEP | Dr. Vinod Raina Clinic",
  description:
    "Pre‑exposure and post‑exposure prophylaxis with baseline screening, safety monitoring, and practical adherence support.",
};

export default function PrepPepPage() {
  return (
    <div className="container-page section">
      <section className="grid gap-8 sm:grid-cols-2 sm:items-center">
        <div>
          <span className="badge">Prevention</span>
          <h1 className="mt-3 text-3xl font-semibold">PrEP & PEP</h1>
          <p className="mt-3 text-foreground/80 max-w-prose">
            PrEP is suited for ongoing risk and includes baseline screening plus periodic follow‑ups. PEP is
            considered within 72 hours of a potential exposure—we evaluate suitability and start treatment promptly when indicated.
          </p>
          <ul className="mt-4 grid gap-2 text-sm text-foreground/80">
            <li>• Baseline labs and kidney function for PrEP</li>
            <li>• Rapid evaluation and initiation for PEP (within 72 hours)</li>
            <li>• Clear counselling and adherence strategies</li>
          </ul>
        </div>
        <div className="relative h-56 sm:h-80 rounded-xl overflow-hidden border border-black/10 dark:border-white/10">
          <Image src="https://picsum.photos/seed/prep-pep/1600/1200" alt="PrEP and PEP" fill className="object-cover" />
        </div>
      </section>

      {/* Long-form content for SEO (~1500+ words) */}
      <section className="prose prose-slate max-w-none mt-10 mb-12">
        <h2>PrEP and PEP in Delhi: Clear, Fast, and Confidential</h2>
        <p>
          Prevention is strongest when it matches real life. We make it simple to start and sustain
          <strong>PrEP</strong> for ongoing risk and to access <strong>PEP</strong> urgently within 72
          hours of a potential exposure. Our team explains each step in plain language and provides
          practical tips so you can act quickly and confidently.
        </p>
        <h3>Who is PrEP for?</h3>
        <p>
          PrEP is appropriate for individuals with ongoing risk of HIV exposure. At the first visit,
          we review your history, discuss lifestyle factors, and perform baseline screening including
          kidney function. We talk through daily versus event‑based dosing options and choose a plan
          you can maintain. Follow‑up visits are scheduled at sensible intervals to confirm safety and
          effectiveness.
        </p>
        <ul>
          <li>Baseline labs and kidney function assessment</li>
          <li>Daily or event‑based dosing options explained clearly</li>
          <li>Refills and reminders designed around work and travel</li>
          <li>Advice on condoms, STI screening, and vaccinations</li>
        </ul>
        <h3>PEP within 72 Hours</h3>
        <p>
          PEP is time sensitive. If a potential exposure occurs, contact us promptly. We evaluate
          suitability, initiate medication when indicated, and provide clear instructions for the full
          course and follow‑up testing. We also discuss side effects and what to do if a dose is
          missed, and we set reminders so the course is completed on time.
        </p>
        <h3>FAQs</h3>
        <ul>
          <li><strong>Can I start PrEP the same day?</strong> Often yes, if screening is compatible
          with same‑day initiation; otherwise, we minimize delays.</li>
          <li><strong>How quickly must PEP start?</strong> As soon as possible—ideally within 72 hours
          of a potential exposure.</li>
          <li><strong>What if I travel?</strong> We plan refills and reminders so prevention stays on
          track during travel and routine changes.</li>
        </ul>
        <h3>About the Doctor</h3>
        <p>
          SAFE HANDS MD Dr. Vinod Raina is an HIV specialist who is a well‑known face in this field. He is
          practicing from past 20 years and has treated thousands of people. He is top most HIV Doctors in
          Delhi, NCR. HIV is a virus which if not eradicated before time can lead to the development of HIV
          positive and then this viral load remains in body for life. Like other viral infections, HIV virus
          also enters the body and attacks the immune cells thus resulting in the collapse of immune system.
          But the difference here is that in case of entry of HIV virus in blood, it makes its home there for
          life. It cannot be eradicated from body then. So to boost immune system and make yourself fit for the
          survival, one has to definitely consult HIV doctor, HIV specialist doctors. In case if HIV infection
          has entered the body and within 72 hours of possible exposure PEP treatment is started, in that case
          one can be prevented from becoming HIV positive. PEP treatment for HIV is given in the window period of
          possible HIV infection. PEP For HIV Treatment is the therapy to eradicate HIV infection from body for life.
        </p>
        <p>
          If you are unsure which option suits you, book an appointment. We’ll discuss your context,
          outline clear steps, and help you begin prevention with confidence.
        </p>
      </section>

      <CTASection />
    </div>
  );
}
