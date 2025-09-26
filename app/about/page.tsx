export const metadata = {
  title: "About | Dr. Vinod Raina Clinic",
  description: "Our mission, approach, and clinical expertise in HIV treatment and sexual health.",
};

import Image from "next/image";
import Script from "next/script";
import FeatureCard from "@/components/FeatureCard";
import AboutDoctorSection from "@/components/AboutDoctorSection";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";

export default function AboutPage() {
  return (
    <div className="container-page section">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "About" }]} />
      <header className="hero-gradient rounded-2xl p-6 sm:p-8 mb-8 border border-black/10 animate-fade-in" aria-labelledby="about-hero-title">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
          <div>
            <span className="badge" aria-hidden>
              About
            </span>
            <h1 id="about-hero-title" className="mt-3 text-3xl sm:text-4xl font-semibold">About Our Clinic</h1>
            <p className="text-foreground/80 mt-2 max-w-prose">
              We are a patient‑centric HIV treatment and sexual health clinic committed to confidentiality, clear communication, and compassionate care.
            </p>
          </div>
          <div className="relative w-full sm:w-72 h-36 sm:h-32 rounded-xl overflow-hidden border border-black/10">
            <Image src="https://picsum.photos/seed/about-hero/800/400" alt="Clinic team and patient support" fill sizes="(max-width: 640px) 100vw, 18rem" className="object-cover" priority />
          </div>
        </div>
      </header>

      <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
        <div>
          <AboutDoctorSection />

          <section className="grid gap-4 sm:grid-cols-3 mb-12">
            <FeatureCard title="Evidence‑Based" description="Protocols aligned with international guidelines and latest research." />
            <FeatureCard title="Privacy First" description="Respectful, confidential care at every touchpoint." />
            <FeatureCard title="Continuity of Care" description="Prevention, early intervention, and long‑term support." />
          </section>

          {/* Long-form clinic profile for SEO (~1500+ words) */}
          <section className="prose prose-slate max-w-none" aria-label="Clinic profile">
          <h2 id="trusted-clinic">Delhi’s Trusted HIV Treatment and Sexual Health Clinic</h2>
          <p>
            Our clinic in South Delhi is built around a simple promise: high‑quality, confidential, and
            judgement‑free care for HIV treatment, prevention, and sexual wellness. We understand the
            anxiety that people feel when searching for reliable information and trustworthy specialists—
            especially when it involves topics that are often stigmatized. That is why we combine
            evidence‑based medicine with clear explanations, gentle communication, and an environment
            designed to protect privacy at every step.
          </p>
          <p>
            Whether you are newly diagnosed, returning to care, considering PrEP, seeking PEP within
            72 hours of a potential exposure, or looking for discreet STI testing and treatment, you
            will find a structured pathway here. We focus on timely access, transparent options, and practical
            next steps so that you can move forward with confidence. Our goal is to help you start and sustain
            treatment, understand results, and build healthy routines that fit your life.
          </p>
          <hr className="my-8 border-black/10" />

          <h3 id="dr-vinod">SAFE HANDS MD: Dr. Vinod Raina</h3>
          <p>
            SAFE HANDS MD Dr. Vinod Raina is an HIV specialist who is a well‑known face in this field. He is
            practicing from past 20 years and has treated thousands of people. He is top most HIV Doctors in
            Delhi, NCR. HIV is a virus which if not eradicated before time can lead to the development of HIV
            positive and then this viral load remains in body for life. Like other viral infections, HIV virus
            also enters the body and attacks the immune cells thus resulting in the collapse of immune system.
          </p>
          <p>
            Building on this experience, our clinic emphasizes fast assessment and rapid initiation of
            appropriate care. For people who are candidates for <strong>PEP</strong>, we provide urgent
            evaluation and clear instructions, and for those who would benefit from <strong>PrEP</strong>, we
            explain baseline tests, follow‑up timelines, and daily vs. event‑based dosing strategies. Our
            approach is practical and non‑judgemental: we adapt guidance to real‑world contexts while staying
            aligned with internationally accepted guidelines.
          </p>
          <hr className="my-8 border-black/10" />

          <h3 id="what-to-expect">HIV Treatment in Delhi: What to Expect</h3>
          <p>
            Modern antiretroviral therapy (ART) is safe, powerful, and—when started early—highly effective at
            suppressing the virus. At your first visit, we review your history, discuss prior medications if any,
            and order baseline investigations. We explain how medications work, what side effects to watch for,
            and how we will monitor your <em>viral load</em> and <em>CD4</em> counts. We also talk through daily
            routines, drug–drug interactions, and practical tips to help you remember doses during busy weeks or
            travel. As your care continues, we schedule regular check‑ins to review results and make adjustments
            together.
          </p>
          <p>
            For people re‑engaging with care or considering a switch, we examine the reasons—side effects,
            resistance concerns, or changes in lifestyle—and build a plan that balances effectiveness, safety,
            and comfort. Our long‑term follow‑up includes support around adherence, mental health, and sexual
            wellbeing, because treatment works best when the whole person is supported.
          </p>
          <hr className="my-8 border-black/10" />

          <h3 id="prevention">Prevention in the Real World: PrEP and PEP</h3>
          <p>
            <strong>PrEP (pre‑exposure prophylaxis)</strong> is for people with ongoing risk. We perform
            baseline screening, review kidney function, and discuss dosing options. Follow‑up visits are
            scheduled at practical intervals so that monitoring is easy to keep up with. <strong>PEP
            (post‑exposure prophylaxis)</strong> is time sensitive—ideally started within 72 hours of a potential
            exposure. We evaluate suitability, initiate medication promptly when indicated, and provide clear
            instructions for the full course and follow‑up testing. Our aim is to make prevention confident,
            stigma‑free, and accessible in Delhi.
          </p>
          <hr className="my-8 border-black/10" />

          <h3 id="sti">Discreet STI Testing and Treatment</h3>
          <p>
            Sexually transmitted infections are common and treatable. We offer confidential screening and
            evidence‑based treatment for bacterial, viral, and parasitic STIs. When an infection is confirmed, we
            discuss partner notification strategies with sensitivity and advise on re‑testing intervals. We also
            explain symptoms to watch for, when to seek urgent care, and how to reduce the risk of reinfection.
          </p>
          <hr className="my-8 border-black/10" />

          <h3 id="sexual-wellness">Addressing Sexual Health Concerns</h3>
          <p>
            Many patients have questions about erectile function, libido, timing, or performance anxiety. We
            normalize these concerns and perform a stepwise evaluation to identify physiological and
            psychological factors. Depending on the findings, plans can include behavioural strategies,
            counselling, targeted medications, and clear follow‑up milestones to evaluate progress.
          </p>
          <h3 id="pathway">Your Care Pathway</h3>
          <div className="card">
            <ol className="space-y-2">
              <li><strong>Private Intake:</strong> history, goals, medications, allergies, and prior results.</li>
              <li><strong>Focused Consultation:</strong> plain‑language discussion of options and next steps.</li>
              <li><strong>Evidence‑Based Testing:</strong> labs and screenings only when helpful.</li>
              <li><strong>Personalized Plan:</strong> HIV treatment, prevention, STI care, or sexual wellness.</li>
              <li><strong>Ongoing Support:</strong> check‑ins, result reviews, and adjustments over time.</li>
            </ol>
          </div>
          <hr className="my-8 border-black/10" />

          <h3 id="privacy">Respect for Privacy and Dignity</h3>
          <p>
            Confidentiality is more than a policy: it is built into our workflow. We protect your data,
            limit access to personal information, and ensure that consultations happen in a respectful, discreet
            setting. We also share practical tips for digital privacy and safe communication, so you can choose
            the contact method that feels most comfortable.
          </p>
          <hr className="my-8 border-black/10" />

          <h3 id="education">Education and Empowerment</h3>
          <p>
            We believe that clear information helps people make confident decisions. During visits, we explain
            test results, medication mechanisms, side effects, and realistic expectations. Between visits, we
            point you to trusted resources so you can keep learning at your own pace. If you prefer, we can also
            provide summaries in simple language after appointments.
          </p>
          <hr className="my-8 border-black/10" />

          <h3 id="urgent-care">When to Seek Urgent Care</h3>
          <p>
            Severe or worsening symptoms such as chest pain, difficulty breathing, high fever, persistent
            vomiting, confusion, or signs of an allergic reaction require urgent evaluation. Seek emergency care
            and contact us as soon as possible—our team will coordinate follow‑up and next steps.
          </p>
          <hr className="my-8 border-black/10" />

          <h3 id="getting-started">Getting Started</h3>
          <p>
            If you are unsure where to begin, the best first step is to request an appointment. Bring a list of
            medications, any prior lab results, and your key questions. We will listen first, explain clearly, and
            help you choose a path forward. Our clinic is located near Malviya Nagar Metro Station in South Delhi
            for convenient access from across the city and NCR.
          </p>
          </section>
        </div>
        <aside className="hidden lg:block sticky top-24 h-max">
          <TableOfContents />
        </aside>
      </div>

      <ProcessSection />
      <CTASection />

      {/* JSON-LD structured data for SEO */}
      <Script id="about-jsonld" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'MedicalClinic',
          name: 'Dr. Vinod Raina Clinic',
          url: 'https://example.com/about',
          medicalSpecialty: ['InfectiousDisease', 'PrimaryCare'],
          founder: {
            '@type': 'Person',
            name: 'Dr. Vinod Raina',
          },
        })}
      </Script>
    </div>
  );
}
