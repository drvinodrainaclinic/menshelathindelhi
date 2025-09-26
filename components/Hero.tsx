import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-gradient rounded-2xl border border-black/10 dark:border-white/10 p-6 sm:p-10 grid gap-8 sm:grid-cols-2 sm:items-center mb-16 animate-fade-in">
      <div>
        <span className="badge">Trusted HIV & Sexual Health Care</span>
        <h1 className="mt-4 text-4xl font-semibold leading-tight">
          Compassionate, Confidential, Evidence‑Based
        </h1>
        <p className="mt-4 text-foreground/80 max-w-prose">
          Our specialists deliver world‑class HIV treatment and comprehensive sexual health services.
          Book an appointment online or learn more about our care approach.
        </p>
        <div className="mt-6 flex gap-3">
          <Link href="/appointments" className="btn btn-primary px-5 py-2.5">
            Book Appointment
          </Link>
          <Link href="/services" className="btn btn-ghost px-5 py-2.5">
            View Services
          </Link>
        </div>
      </div>
      <div className="rounded-xl border border-black/10 dark:border-white/10 h-56 sm:h-80 bg-white/60 dark:bg-black/40 overflow-hidden animate-slide-up relative">
        <Image src="https://images.unsplash.com/photo-1584515933487-779824d29309" alt="Compassionate healthcare environment" fill className="object-cover" />
      </div>
    </section>
  );
}
