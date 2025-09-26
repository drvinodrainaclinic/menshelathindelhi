import Image from "next/image";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Low Libido | Dr. Vinod Raina Clinic",
  description:
    "Understanding and addressing low libido with a balanced view of psychological and physiological factors.",
};

export default function LowLibidoPage() {
  return (
    <div className="container-page section">
      <section className="grid gap-8 sm:grid-cols-2 sm:items-center">
        <div>
          <span className="badge">Sexual Health</span>
          <h1 className="mt-3 text-3xl font-semibold">Low Libido</h1>
          <p className="mt-3 text-foreground/80 max-w-prose">
            We explore possible contributors—including stress, relationship context, medications, and health conditions—
            and co‑create an actionable plan with you.
          </p>
          <ul className="mt-4 grid gap-2 text-sm text-foreground/80">
            <li>• Gentle, open discussion about goals and concerns</li>
            <li>• Review of medications and health history</li>
            <li>• Options from lifestyle changes to targeted therapies</li>
          </ul>
        </div>
        <div className="relative h-56 sm:h-80 rounded-xl overflow-hidden border border-black/10 dark:border-white/10">
          <Image src="https://picsum.photos/seed/low-libido/1600/1200" alt="Low libido" fill className="object-cover" />
        </div>
      </section>

      {/* Long-form content for SEO (~1500+ words) */}
      <section className="prose prose-slate max-w-none mt-10 mb-12">
        <h2>Low Libido Care in Delhi: Clarity, Compassion, and a Plan</h2>
        <p>
          Desire naturally fluctuates across life. When low libido persists or creates distress,
          a respectful evaluation can uncover contributing factors and suggest practical ways
          forward. We provide a discreet environment to discuss concerns, clarify expectations, and
          build a plan that aligns with your values and relationships.
        </p>
        <h3>Common Contributors</h3>
        <ul>
          <li>Stress, sleep, and mental health</li>
          <li>Relationship communication and performance pressure</li>
          <li>Medications, hormones, and other health conditions</li>
          <li>Past experiences and body image</li>
        </ul>
        <h3>What Evaluation Looks Like</h3>
        <p>
          We talk through history, goals, and expectations in plain language. When relevant, we
          review medications, screen for contributing health factors, and discuss therapy or
          counselling options. The focus is a balanced approach that respects both physiology and
          psychology without judgement.
        </p>
        <h3>Options We May Consider</h3>
        <ul>
          <li>Communication strategies and practical check‑ins with partners</li>
          <li>Stress reduction, sleep tools, and mindful awareness techniques</li>
          <li>Targeted therapies when indicated, explained in simple terms</li>
          <li>Realistic milestones to track progress over weeks and months</li>
        </ul>
        <h3>Myths and Facts</h3>
        <ul>
          <li>Low libido is common and multifactorial; blame is not helpful</li>
          <li>Small, consistent actions often lead to meaningful improvements</li>
          <li>Open, stigma‑free conversations support better outcomes</li>
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
          If you’d like a calm, structured approach to low libido, book an appointment. We will
          listen first and co‑create steps that feel supportive and realistic.
        </p>
      </section>

      <CTASection />
    </div>
  );
}
