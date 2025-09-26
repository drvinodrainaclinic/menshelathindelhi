import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import ReviewCarousel from "@/components/ReviewCarousel";
import FAQ from "@/components/FAQ";

export const metadata = {
  title: "Sexual Treatment in Delhi | Dr. Vinod Raina Clinic",
  description: "Confidential sexual health treatment in Delhi: counselling, STI testing and treatment, PrEP/PEP, and comprehensive HIV care.",
};

export default function SexualTreatmentPage() {
  return (
    <div className="container-page section">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Treatment" }]} />
      {/* Hero */}
      <section className="hero-gradient rounded-2xl border border-black/10 dark:border-white/10 p-6 sm:p-10 grid gap-8 sm:grid-cols-2 sm:items-center mb-10">
        <div>
          <span className="badge">Treatments</span>
          <h1 className="mt-3 text-3xl sm:text-4xl font-semibold">Sexual Treatment in Delhi</h1>
          <p className="mt-3 text-foreground/80 max-w-prose">
            Explore all treatments. Choose a path that fits your needs—confidentially and with compassion.
          </p>
          <div className="mt-5 flex gap-3">
            <Link href="/appointments" className="btn btn-primary">Book Appointment</Link>
            <a href="#catalog" className="btn btn-ghost">Browse Treatments</a>
          </div>
        </div>
        <div className="relative h-56 sm:h-80 rounded-xl overflow-hidden border border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/40">
          <Image src="https://picsum.photos/seed/treatments-hero/1200/900" alt="Treatments overview" fill className="object-cover" />
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="grid gap-8 sm:grid-cols-2 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-3">HIV / STD Care</h2>
          <ul className="grid gap-2">
            <li><Link className="card hover:shadow-sm block" href="/treatments/hiv-treatment">HIV Treatment</Link></li>
            <li><Link className="card hover:shadow-sm block" href="/treatments/sti-testing">STI Testing & Care</Link></li>
            <li><Link className="card hover:shadow-sm block" href="/treatments/prep-pep">PrEP / PEP</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-3">Sexual Health</h2>
          <ul className="grid gap-2">
            <li><Link className="card hover:shadow-sm block" href="/treatments/erectile-dysfunction">Erectile Dysfunction (ED)</Link></li>
            <li><Link className="card hover:shadow-sm block" href="/treatments/premature-ejaculation">Premature Ejaculation (PE)</Link></li>
            <li><Link className="card hover:shadow-sm block" href="/treatments/low-libido">Low Libido</Link></li>
            <li><Link className="card hover:shadow-sm block" href="/treatments/performance-anxiety">Performance Anxiety</Link></li>
          </ul>
        </div>
      </section>

      {/* Long-form treatment hub content for SEO (~1500+ words) */}
      <section className="prose prose-slate max-w-none mb-12">
        <h2>All Treatments Under One Roof in Delhi</h2>
        <p>
          This page brings together our HIV/STD services and sexual health care so you can quickly
          find the right path. Whether you need urgent help with PEP within 72 hours, want to
          explore PrEP for ongoing prevention, require discreet STI testing, or prefer a
          judgement‑free conversation about erectile function, libido, or performance anxiety, our
          team provides clear information and compassionate care. We prioritize privacy, practical
          guidance, and proven treatments aligned with international standards while respecting
          Delhi’s day‑to‑day realities.
        </p>
        <h3>HIV Care: From First Steps to Long‑Term Support</h3>
        <p>
          Modern ART regimens are powerful and well‑tolerated. We start with a private intake and
          baseline investigations, then discuss regimen options in plain language: how medicines
          work, when to take doses, expected timelines, and what side effects to watch for.
          Follow‑ups focus on viral load and CD4 counts, but just as importantly, they include
          practical problem‑solving so treatment fits into real life—work hours, travel, family
          commitments, or fasting days. If you are switching or re‑engaging, we examine side effects,
          resistance concerns, and lifestyle fit to choose a plan that balances safety,
          effectiveness, and comfort.
        </p>
        <h3>PEP Within 72 Hours</h3>
        <p>
          PEP is most effective when started as soon as possible after a potential exposure. If you
          think you may have been exposed, contact us promptly. We will evaluate suitability,
          initiate medication when indicated, and explain the full course and follow‑up testing.
          Clear timelines and reminders help you complete the regimen with confidence.
        </p>
        <h3>PrEP for Ongoing Prevention</h3>
        <p>
          For people with ongoing risk, PrEP is a highly effective prevention tool. We perform
          baseline screening, check kidney function, and discuss daily versus event‑based dosing.
          We schedule practical follow‑ups so monitoring is straightforward and offer tips for
          adherence during travel or busy weeks. Our goal is to make prevention confident and
          stigma‑free in Delhi.
        </p>
        <h3>Discreet STI Testing and Treatment</h3>
        <p>
          STI screening is offered in a respectful, private environment. We explain each test in
          plain language and, when infections are confirmed, we provide guideline‑aligned treatment
          and discuss re‑testing intervals. We talk through partner notification options and share
          realistic strategies to reduce reinfection without judgement.
        </p>
        <h3>Sexual Health: ED, PE, Low Libido, and Performance Anxiety</h3>
        <p>
          Sexual concerns are common and treatable. We normalize questions about timing, confidence,
          and desire, and then perform a stepwise evaluation to identify potential physiological and
          psychological contributors. Plans can include behavioural strategies you can apply at home,
          counselling, targeted medications when appropriate, and clear follow‑up milestones so you
          can track progress.
        </p>
        <h3>What to Expect at the Clinic</h3>
        <ol>
          <li><strong>Private Intake:</strong> history, concerns, goals, and prior reports.</li>
          <li><strong>Focused Consultation:</strong> plain‑language options and next steps.</li>
          <li><strong>Evidence‑Based Testing:</strong> labs and screenings only when helpful.</li>
          <li><strong>Personalized Plan:</strong> treatment, prevention, or sexual wellness support.</li>
          <li><strong>Ongoing Support:</strong> result reviews, adjustments, and practical guidance.</li>
        </ol>
        <h3>Why People Choose Us in Delhi</h3>
        <ul>
          <li>Respectful, confidential environment with stigma‑free communication</li>
          <li>Rapid help for PEP and clear pathways for PrEP, ART, and STI care</li>
          <li>Plans tailored to work schedules, travel, and family responsibilities</li>
          <li>Education that turns complex information into practical next steps</li>
        </ul>
        <p>
          If you are unsure where to begin, request an appointment. Bring your questions and any
          recent reports. We will listen first and help you choose a path that fits your life.
        </p>
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
      </section>

      {/* Reviews */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What Our Patients Say</h2>
        <ReviewCarousel />
      </section>

      {/* FAQs */}
      <section id="faqs" className="mb-16">
        <FAQ />
      </section>
    </div>
  );
}
