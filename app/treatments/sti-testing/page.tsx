import Image from "next/image";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "STI Testing & Care | Dr. Vinod Raina Clinic",
  description:
    "Confidential screening, accurate diagnosis, and guideline‑based treatment for bacterial, viral, and parasitic STIs.",
};

export default function STITestingPage() {
  return (
    <div className="container-page section">
      <section className="grid gap-8 sm:grid-cols-2 sm:items-center">
        <div>
          <span className="badge">STI Testing & Care</span>
          <h1 className="mt-3 text-3xl font-semibold">Simple, Private & Respectful</h1>
          <p className="mt-3 text-foreground/80 max-w-prose">
            We offer confidential screening and treatment for common STIs, with clear guidance about next steps and
            when to return for care. Partner notification support and re‑testing intervals are discussed as needed.
          </p>
          <ul className="mt-4 grid gap-2 text-sm text-foreground/80">
            <li>• Bacterial, viral, and parasitic STI testing</li>
            <li>• Evidence‑based treatments and follow‑up</li>
            <li>• Discreet, judgement‑free experience</li>
          </ul>
        </div>
        <div className="relative h-56 sm:h-80 rounded-xl overflow-hidden border border-black/10 dark:border-white/10">
          <Image src="https://picsum.photos/seed/sti-testing/1600/1200" alt="STI testing" fill className="object-cover" />
        </div>
      </section>

      {/* Long-form content for SEO (~1500+ words) */}
      <section className="prose prose-slate max-w-none mt-10 mb-12">
        <h2>Confidential STI Testing and Treatment in Delhi</h2>
        <p>
          We provide private, judgement‑free screening and guideline‑aligned treatment for sexually
          transmitted infections (STIs). Our goal is simple: make it easy to get answers, receive
          appropriate treatment, and understand follow‑up steps—without stigma or confusion. We
          explain each test in plain language and help you decide what’s relevant today versus what
          can be scheduled later.
        </p>
        <h3>When to Consider Testing</h3>
        <ul>
          <li>Symptoms such as unusual discharge, sores, burning, pelvic pain, or rashes</li>
          <li>New partner(s) or unprotected sex</li>
          <li>Partner diagnosed with an STI</li>
          <li>Routine screening as part of prevention and peace of mind</li>
        </ul>
        <h3>What We Test For</h3>
        <p>
          Depending on history and symptoms, we may screen for bacterial, viral, and parasitic STIs
          using swabs, urine tests, and blood tests. We outline the window periods for each
          infection—when a test becomes reliable—and schedule re‑testing if needed.
        </p>
        <h3>Treatment and Follow‑Up</h3>
        <p>
          When an infection is confirmed, we provide guideline‑aligned treatment and clear
          instructions. We discuss when you can resume sexual activity, how to reduce reinfection,
          and practical approaches to partner notification. If symptoms do not resolve as expected,
          we re‑evaluate sensitively and promptly.
        </p>
        <h3>Privacy and Respect</h3>
        <p>
          We design visits to protect dignity—confidential records, discreet communication, and a
          respectful tone at every touchpoint. We can coordinate with your preferred pharmacies and
          provide written summaries when helpful.
        </p>
        <h3>Frequently Asked Questions</h3>
        <ul>
          <li><strong>How soon should I test after a possible exposure?</strong> It depends on the STI.
          We’ll explain window periods and plan initial and follow‑up tests accordingly.</li>
          <li><strong>Do I need to tell my partner?</strong> We’ll discuss respectful, practical ways to
          notify partners and reduce stigma.</li>
          <li><strong>Can I keep this entirely private?</strong> We respect confidentiality and offer
          options for discreet test names and communication.</li>
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
          If you’re unsure where to begin, book an appointment. Bring your questions and any recent
          reports—we’ll listen first and guide you step by step.
        </p>
      </section>

      <CTASection />
    </div>
  );
}
