import Image from "next/image";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Erectile Dysfunction (ED) | Dr. Vinod Raina Clinic",
  description:
    "Sensitive evaluation and evidence‑based options for ED, with a focus on clarity, privacy, and practical next steps.",
};

export default function EDPage() {
  return (
    <div className="container-page section">
      <section className="grid gap-8 sm:grid-cols-2 sm:items-center">
        <div>
          <span className="badge">Sexual Health</span>
          <h1 className="mt-3 text-3xl font-semibold">Erectile Dysfunction (ED)</h1>
          <p className="mt-3 text-foreground/80 max-w-prose">
            We normalize questions about sexual function and provide stepwise evaluation to understand potential causes—
            whether physiological, psychological, or both. Plans can include behavioural strategies, counselling, and medicines.
          </p>
          <ul className="mt-4 grid gap-2 text-sm text-foreground/80">
            <li>• Confidential conversation and history</li>
            <li>• Targeted investigations as needed</li>
            <li>• Clear, practical treatment options</li>
          </ul>
        </div>
        <div className="relative h-56 sm:h-80 rounded-xl overflow-hidden border border-black/10 dark:border-white/10">
          <Image src="https://picsum.photos/seed/ed/1600/1200" alt="Erectile dysfunction" fill className="object-cover" />
        </div>
      </section>

      {/* Long-form content for SEO (~1500+ words) */}
      <section className="prose prose-slate max-w-none mt-10 mb-12">
        <h2>Erectile Dysfunction (ED) Care in Delhi: Private, Practical, Evidence‑Based</h2>
        <p>
          Erectile dysfunction is common and treatable. Our clinic offers a discreet space to
          discuss concerns, understand contributing factors, and build a stepwise plan that fits
          your life. We combine empathetic conversations with evidence‑based options and clear
          follow‑up milestones so progress is easy to measure.
        </p>
        <h3>Understanding ED</h3>
        <p>
          ED can be influenced by cardiovascular health, hormones, medications, stress, sleep,
          relationship context, and performance anxiety. We review your history, discuss goals, and
          order investigations when useful. We then co‑create a plan that may include behavioural
          strategies, therapy, lifestyle changes, and targeted medicines.
        </p>
        <h3>What Your Plan May Include</h3>
        <ul>
          <li>Practical techniques for anxiety and timing</li>
          <li>Gradual exposure strategies to rebuild confidence</li>
          <li>Medication options explained in simple language</li>
          <li>Sleep, exercise, and nutrition guidance that is realistic</li>
        </ul>
        <h3>Myths vs. Facts</h3>
        <ul>
          <li>ED is not a personal failure—it is a health condition with solutions</li>
          <li>Confidence grows with small, consistent wins and supportive guidance</li>
          <li>Open, respectful conversations improve outcomes</li>
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
          If you are unsure where to start, book an appointment. We will listen first and outline practical
          steps tailored to your comfort.
        </p>
      </section>

      <CTASection />
    </div>
  );
}
