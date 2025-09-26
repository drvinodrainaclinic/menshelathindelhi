import Image from "next/image";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Premature Ejaculation (PE) | Dr. Vinod Raina Clinic",
  description:
    "Supportive evaluation and options for PE, focused on practical strategies and evidence‑based care.",
};

export default function PEPage() {
  return (
    <div className="container-page section">
      <section className="grid gap-8 sm:grid-cols-2 sm:items-center">
        <div>
          <span className="badge">Sexual Health</span>
          <h1 className="mt-3 text-3xl font-semibold">Premature Ejaculation (PE)</h1>
          <p className="mt-3 text-foreground/80 max-w-prose">
            We discuss concerns openly and assess contributing factors. Plans can include behavioural techniques,
            counselling, and appropriate medications where indicated.
          </p>
          <ul className="mt-4 grid gap-2 text-sm text-foreground/80">
            <li>• Private, respectful conversations</li>
            <li>• Stepwise strategies you can apply</li>
            <li>• Follow‑ups to refine the plan</li>
          </ul>
        </div>
        <div className="relative h-56 sm:h-80 rounded-xl overflow-hidden border border-black/10 dark:border-white/10">
          <Image src="https://picsum.photos/seed/pe/1600/1200" alt="Premature ejaculation" fill className="object-cover" />
        </div>
      </section>

      {/* Long-form content for SEO (~1500+ words) */}
      <section className="prose prose-slate max-w-none mt-10 mb-12">
        <h2>Premature Ejaculation (PE) Care in Delhi: Clear Steps, Real Progress</h2>
        <p>
          Premature ejaculation is a common concern that responds well to a structured approach. We
          focus on reducing anxiety, improving timing, and strengthening confidence with practical
          techniques and evidence‑based options. Conversations are private and stigma‑free.
        </p>
        <h3>Understanding PE</h3>
        <p>
          PE can be influenced by anxiety, relationship context, timing patterns, and sometimes
          physiological contributors. We discuss goals in plain language and set milestones that are
          achievable and motivating.
        </p>
        <h3>Your Stepwise Plan</h3>
        <ul>
          <li>Behavioural techniques to improve timing and control</li>
          <li>Mindfulness and breathing strategies to reduce performance pressure</li>
          <li>Targeted medications when appropriate, explained clearly</li>
          <li>Check‑ins to refine the plan and celebrate progress</li>
        </ul>
        <h3>Myths and Facts</h3>
        <ul>
          <li>PE is common and treatable—progress is usually steady with practice</li>
          <li>Confidence grows with small wins and supportive feedback</li>
          <li>Open communication improves outcomes and reduces worry</li>
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
          If you want a private, structured plan for PE, book an appointment. We will listen first and
          outline steps that are realistic and encouraging.
        </p>
      </section>

      <CTASection />
    </div>
  );
}
