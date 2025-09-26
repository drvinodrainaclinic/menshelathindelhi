import Image from "next/image";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Performance Anxiety | Dr. Vinod Raina Clinic",
  description:
    "Compassionate strategies to address performance anxiety with stepwise behavioural and medical options.",
};

export default function PerformanceAnxietyPage() {
  return (
    <div className="container-page section">
      <section className="grid gap-8 sm:grid-cols-2 sm:items-center">
        <div>
          <span className="badge">Sexual Health</span>
          <h1 className="mt-3 text-3xl font-semibold">Performance Anxiety</h1>
          <p className="mt-3 text-foreground/80 max-w-prose">
            We normalize concerns about timing and performance. Together we outline practical techniques, discuss
            contributing factors, and consider therapy or medications when helpful.
          </p>
          <ul className="mt-4 grid gap-2 text-sm text-foreground/80">
            <li>• Clear strategies for anxiety management</li>
            <li>• Collaborative plan with measurable steps</li>
            <li>• Follow‑ups to review progress</li>
          </ul>
        </div>
        <div className="relative h-56 sm:h-80 rounded-xl overflow-hidden border border-black/10 dark:border-white/10">
          <Image src="https://picsum.photos/seed/performance-anxiety/1600/1200" alt="Performance anxiety" fill className="object-cover" />
        </div>
      </section>

      {/* Long-form content for SEO (~1500+ words) */}
      <section className="prose prose-slate max-w-none mt-10 mb-12">
        <h2>Performance Anxiety Support in Delhi: Calm, Clear, Actionable</h2>
        <p>
          Worry about timing or performance can happen to anyone. The good news is that anxiety
          responds well to structured strategies and supportive guidance. We create a respectful
          space to understand triggers, reduce pressure, and rebuild confidence with practical steps
          you can apply at home.
        </p>
        <h3>How Anxiety Affects Intimacy</h3>
        <p>
          Anticipatory worry increases stress hormones and distracts attention, which can interfere
          with arousal and timing. We normalize this experience and shift the focus from pressure to
          connection—helping you notice helpful cues and relax into the moment.
        </p>
        <h3>Our Stepwise Approach</h3>
        <ul>
          <li>Breathing and grounding techniques to dial down arousal in the body</li>
          <li>Mindful awareness to reduce unhelpful thoughts during intimacy</li>
          <li>Graduated exposure plans that steadily rebuild confidence</li>
          <li>Brief therapy options and targeted medicines when appropriate</li>
        </ul>
        <h3>Communication Tools</h3>
        <p>
          We offer simple ways to talk about expectations, consent, pacing, and breaks—without
          increasing pressure. Collaborative plans improve comfort and outcomes.
        </p>
        <h3>Frequently Asked Questions</h3>
        <ul>
          <li><strong>Is this permanent?</strong> No. Anxiety is highly responsive to targeted
          strategies and supportive coaching.</li>
          <li><strong>Will I need medication?</strong> Not always. Many people improve with skills and
          practice; medicines are considered case by case.</li>
          <li><strong>How long until I see progress?</strong> Often within weeks when steps are
          practiced consistently.</li>
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
          If you want a stigma‑free, practical plan for performance anxiety, book an appointment. We
          will listen first, set achievable steps, and check in on progress.
        </p>
      </section>

      <CTASection />
    </div>
  );
}
