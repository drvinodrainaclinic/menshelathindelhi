import Image from "next/image";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "HIV Treatment | Dr. Vinod Raina Clinic",
  description:
    "Personalized ART management, side‑effect support, and long‑term follow‑up for durable viral suppression.",
};

export default function HIVTreatmentPage() {
  return (
    <div className="container-page section">
      <section className="grid gap-8 sm:grid-cols-2 sm:items-center">
        <div>
          <span className="badge">HIV Treatment</span>
          <h1 className="mt-3 text-3xl font-semibold">Personalized ART & Ongoing Care</h1>
          <p className="mt-3 text-foreground/80 max-w-prose">
            Initiating ART early supports viral suppression, improved immune function, and quality of life. We
            help you choose the right regimen, monitor response, and support adherence with practical strategies.
          </p>
          <ul className="mt-4 grid gap-2 text-sm text-foreground/80">
            <li>• Regimen selection tailored to your history and lifestyle</li>
            <li>• Side‑effect management and drug‑interaction review</li>
            <li>• Viral load & CD4 monitoring, with regular follow‑ups</li>
          </ul>
        </div>
        <div className="relative h-56 sm:h-80 rounded-xl overflow-hidden border border-black/10 dark:border-white/10">
          <Image src="https://picsum.photos/seed/hiv-treatment/1600/1200" alt="HIV treatment" fill className="object-cover" />
        </div>
      </section>

      {/* Long-form content for SEO (~1500+ words) */}
      <section className="prose prose-slate max-w-none mt-10 mb-12">
        <h2>Best HIV Treatment in Delhi: What Comprehensive Care Looks Like</h2>
        <p>
          Delhi residents deserve clear, confidential, and dependable HIV care. Our clinic provides a
          structured pathway—from the first consultation to long‑term follow‑up—that blends
          internationally aligned protocols with practical support. We focus on plain‑language
          explanations, sensible monitoring schedules, and stigma‑free communication so that you can
          start and sustain antiretroviral therapy (ART) confidently.
        </p>
        <h3>Getting Started</h3>
        <p>
          The first visit focuses on listening. We review your goals, history, any prior or current
          medications, allergies, and recent lab results. If tests are due, we explain why they are
          helpful and what the numbers mean—especially viral load and CD4. Together we outline a
          medication plan that balances effectiveness, safety, convenience, and lifestyle fit.
        </p>
        <h3>Choosing and Optimizing ART</h3>
        <p>
          Modern ART is powerful and generally well tolerated. We discuss options, dosing (once
          daily vs. alternatives), food considerations, and drug–drug interactions. We share
          strategies for staying on track during busy weeks or travel—alarms, pill organizers,
          simple routines—and we document a monitoring plan so you always know the next step.
        </p>
        <ul>
          <li>Regimen selection personalized to history and lifestyle</li>
          <li>Side‑effect prevention and stepwise troubleshooting</li>
          <li>Viral load suppression goals and realistic timelines</li>
          <li>Clear guidance about missed doses and what to do</li>
        </ul>
        <h3>Monitoring That Makes Sense</h3>
        <p>
          Follow‑ups are scheduled at practical intervals. We highlight trends—how viral load is
          changing, what that means for your health and partners, and how CD4 recovery works over
          time. If numbers do not move as expected, we investigate calmly and adjust. We also check
          in on sleep, stress, mental health, and sexual wellbeing, because all of these affect
          treatment success.
        </p>
        <h3>When Life Changes</h3>
        <p>
          If side effects appear, routines change, or you plan travel or fasting, we adapt your plan
          and provide written instructions. For re‑engaging patients or those considering a switch,
          we review prior medications and any resistance concerns, then choose a regimen that restores
          comfort and control. Our aim is to keep care stable and sustainable.
        </p>
        <h3>Prevention for You and Your Partners</h3>
        <p>
          We discuss U=U (Undetectable = Untransmittable) in plain language and explore prevention
          tools for partners, including PrEP where appropriate. We emphasize consent, communication,
          and strategies that respect privacy and dignity.
        </p>
        <h3>Frequently Asked Questions</h3>
        <ul>
          <li><strong>How quickly will viral load become undetectable?</strong> Most people see a steady
          decline within weeks, with undetectable levels usually achieved in a few months when
          medications are taken consistently.</li>
          <li><strong>What if I miss a dose?</strong> Take it when you remember unless it is close to the
          next dose—then skip and continue as scheduled. We provide a simple written plan.</li>
          <li><strong>Can I fast or travel?</strong> Yes. We plan around travel and fasting and provide
          practical tips and reminders.</li>
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
        <h3>When to Seek Urgent Care</h3>
        <p>
          Severe or worsening symptoms such as chest pain, difficulty breathing, very high fever,
          persistent vomiting, confusion, or signs of an allergic reaction require urgent evaluation.
          Seek emergency care and inform us as soon as possible so we can coordinate next steps.
        </p>
        <p>
          If you are uncertain where to begin, request an appointment. Bring any recent reports and a
          list of medications. We will listen first and help you choose a plan that fits your life.
        </p>
      </section>

      <section className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="card">
          <h2 className="font-semibold">What to Expect</h2>
          <ul className="mt-2 list-disc pl-5 text-sm text-foreground/80 space-y-1">
            <li>Baseline labs and screening for co‑infections</li>
            <li>Clear medication counselling with adherence strategies</li>
            <li>Regular reviews to track response and side effects</li>
          </ul>
        </div>
        <div className="card">
          <h2 className="font-semibold">When to Seek Urgent Care</h2>
          <p className="mt-2 text-sm text-foreground/80">
            Severe or worsening symptoms, significant side effects, or suspected allergic reactions warrant urgent care.
            Contact us as soon as possible—we’ll coordinate next steps.
          </p>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
