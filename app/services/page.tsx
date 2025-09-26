import Image from "next/image";
import Script from "next/script";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Services | Dr. Vinod Raina Clinic",
  description: "HIV treatment, PrEP/PEP, STI testing, and comprehensive sexual health services.",
};

export default function ServicesPage() {
  return (
    <div className="container-page section">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Services" }]} />
      <header className="hero-gradient rounded-2xl p-6 sm:p-8 mb-8 border border-black/10 animate-fade-in" aria-labelledby="services-hero-title">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
          <div>
            <span className="badge" aria-hidden>
              Services
            </span>
            <h1 id="services-hero-title" className="mt-3 text-3xl sm:text-4xl font-semibold">
              Our Services
            </h1>
            <p className="text-foreground/80 mt-2 max-w-prose">
              Evidence‑based HIV treatment, prevention, and sexual wellness—delivered with confidentiality and clarity in Delhi.
            </p>
          </div>
          <div className="relative w-full sm:w-72 h-36 sm:h-32 rounded-xl overflow-hidden border border-black/10">
            <Image
              src="https://picsum.photos/seed/services-hero/800/400"
              alt="Illustration representing clinic services"
              fill
              sizes="(max-width: 640px) 100vw, 18rem"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </header>

      <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
        <div>
          <div className="prose prose-slate max-w-none mb-10">
            <p>
              We provide evidence‑based, confidential, and compassionate care across HIV treatment and sexual health. Whether you are seeking a prevention strategy, managing a diagnosis, or addressing a specific concern, our team supports you with clear information, careful evaluation, and individualized plans.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <section id="hiv-treatment-care" aria-labelledby="hiv-heading">
              <h2 id="hiv-heading" className="text-xl font-semibold mb-3">
                HIV Treatment & Care
              </h2>
              <div className="grid gap-3">
                <div className="card">ART initiation and optimization</div>
                <div className="card">Viral load monitoring and adherence support</div>
                <div className="card">Opportunistic infection screening</div>
                <div className="card">Counselling and long-term follow-up</div>
              </div>
            </section>
            <section id="sexual-health" aria-labelledby="sexual-health-heading">
              <h2 id="sexual-health-heading" className="text-xl font-semibold mb-3">
                Sexual Health
              </h2>
              <div className="grid gap-3">
                <div className="card">STI testing and treatment</div>
                <div className="card">PrEP & PEP for HIV prevention</div>
                <div className="card">Men’s and women’s sexual wellness</div>
                <div className="card">Confidential counselling and education</div>
              </div>
            </section>
          </div>

          {/* Long-form services overview for SEO (~1500+ words) */}
          <section id="overview" className="prose prose-slate max-w-none mt-10 mb-12">
            <h2>Comprehensive HIV Treatment and Sexual Health Services in Delhi</h2>
            <p>
              Choosing a clinic in Delhi for HIV care, prevention, and sexual wellness can be confusing. Our services are designed to make the path simple, confidential, and dependable—from your first appointment to long‑term support. We bring together clinical expertise, international standards, and genuinely respectful communication so you can make informed decisions without stigma.
            </p>
            <h3 id="hiv-long-term">HIV Treatment and Long‑Term Care</h3>
            <p>
              Antiretroviral therapy (ART) is the foundation of HIV management. We initiate or optimize regimens based on your history, potential interactions, and preferences, then schedule practical follow‑ups to review viral load and CD4 results. We explain how medicines work, discuss common side effects, and share strategies that help people take doses consistently during busy weeks and travel. For those re‑engaging with care or considering a switch, we review reasons such as side effects or resistance and craft a plan that balances effectiveness and comfort. Our goal is durable viral suppression and a good quality of life.
            </p>
            <ul>
              <li>Regimen selection tailored to lifestyle and medical history</li>
              <li>Side‑effect management and drug–drug interaction review</li>
              <li>Regular monitoring with clear, plain‑language result explanations</li>
              <li>Coordinated referrals to allied specialists when helpful</li>
            </ul>
            <h3 id="prevention">Prevention Services: PrEP & PEP</h3>
            <p>
              Prevention is most effective when it fits real life. We prescribe and supervise <strong>PrEP</strong> for ongoing risk with baseline screening and periodic check‑ins for safety and support. For <strong>PEP</strong>, timing matters: evaluation and initiation ideally occur within 72 hours of a potential exposure. We make the steps clear—what to start, when to test, and how to follow up—so you can move forward with confidence.
            </p>
            <ul>
              <li>Baseline labs and kidney function review for PrEP</li>
              <li>Rapid, judgement‑free evaluation for PEP (within 72 hours)</li>
              <li>Adherence strategies matched to routines and travel</li>
              <li>Education about risk reduction that respects individual contexts</li>
            </ul>
            <h3 id="sti">STI Testing and Treatment</h3>
            <p>
              We offer discreet screening and guideline‑aligned treatment for bacterial, viral, and parasitic STIs. Results are explained in simple language, and partner notification strategies are discussed with sensitivity. We advise on re‑testing intervals, symptoms to watch for, and steps to reduce reinfection. Our aim is to make care efficient and respectful.
            </p>
            <h3 id="sexual-wellness">Sexual Wellness Care</h3>
            <p>
              Many people have questions about erectile function, libido, timing, and performance anxiety. We use a stepwise approach to identify contributing factors—physiological, psychological, or both—and outline practical options: behavioural techniques, counselling, targeted medications, and clear follow‑up milestones. Conversations are stigma‑free and tailored to your goals.
            </p>
            <h3 id="pathway">Your Care Pathway</h3>
            <ol>
              <li><strong>Private Intake:</strong> understanding concerns, goals, medications, and prior reports.</li>
              <li><strong>Focused Consultation:</strong> options, trade‑offs, and next steps explained clearly.</li>
              <li><strong>Evidence‑Based Testing:</strong> performed when useful and explained in plain language.</li>
              <li><strong>Treatment or Prevention Plan:</strong> timelines, monitoring, and support.</li>
              <li><strong>Follow‑Ups:</strong> result reviews and plan adjustments based on progress and comfort.</li>
            </ol>
            <h3 id="why-us">Why Choose Our Delhi Clinic</h3>
            <ul>
              <li>Confidential environment with respectful communication at every touchpoint</li>
              <li>Experienced team aligned with international standards and local realities</li>
              <li>Fast access for PEP and clear pathways for PrEP, ART, and STI care</li>
              <li>Practical education and support between visits</li>
            </ul>
            <p>
              If you are unsure where to begin, request an appointment. Bring your questions, recent reports if you have them, and a list of medications. We will listen first and help you choose a path that fits your life. Our clinic is conveniently located near Malviya Nagar Metro Station for easy access across Delhi and NCR.
            </p>
            <h3 id="doctor">About the Doctor</h3>
            <p>
              SAFE HANDS MD Dr. Vinod Raina is an HIV specialist who is a well‑known face in this field. He is practicing from past 20 years and has treated thousands of people. He is top most HIV Doctors in Delhi, NCR. HIV is a virus which if not eradicated before time can lead to the development of HIV positive and then this viral load remains in body for life. Like other viral infections, HIV virus also enters the body and attacks the immune cells thus resulting in the collapse of immune system. But the difference here is that in case of entry of HIV virus in blood, it makes its home there for life. It cannot be eradicated from body then. So to boost immune system and make yourself fit for the survival, one has to definitely consult HIV doctor, HIV specialist doctors. In case if HIV infection has entered the body and within 72 hours of possible exposure PEP treatment is started, in that case one can be prevented from becoming HIV positive. PEP treatment for HIV is given in the window period of possible HIV infection. PEP For HIV Treatment is the therapy to eradicate HIV infection from body for life.
            </p>
          </section>

          {/* Structured sections instead of additional prose */}
          <ServicesSection />
          <ProcessSection />
          <CTASection />
        </div>
        <aside className="hidden lg:block sticky top-24 h-max">
          <TableOfContents />
        </aside>
      </div>

      {/* JSON-LD structured data for SEO */}
      <Script id="services-jsonld" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'MedicalClinic',
          name: 'Dr. Vinod Raina Clinic',
          url: 'https://example.com/services',
          medicalSpecialty: ['InfectiousDisease', 'PrimaryCare'],
          department: [
            { '@type': 'MedicalSpecialty', name: 'HIV Treatment' },
            { '@type': 'MedicalSpecialty', name: 'Sexual Health' },
            { '@type': 'MedicalSpecialty', name: 'STI Testing & Treatment' },
            { '@type': 'MedicalSpecialty', name: 'PrEP & PEP' }
          ],
        })}
      </Script>
    </div>
  );
}
