import Image from "next/image";

export default function AboutDoctorSection() {
  return (
    <section className="section">
      <div className="grid gap-8 sm:grid-cols-2 sm:items-center">
        <div className="rounded-2xl overflow-hidden border border-black/10 dark:border-white/10">
          <div className="relative h-72 sm:h-[26rem] bg-white/60 dark:bg-black/40">
            <Image src="https://images.unsplash.com/photo-1550831107-1553da8c8464" alt="Doctor portrait" fill className="object-cover" />
          </div>
        </div>
        <div>
          <span className="badge">About Dr.</span>
          <h2 className="mt-3 text-3xl font-semibold">Compassionate HIV & Sexual Health Specialist</h2>
          <p className="mt-3 text-foreground/80 max-w-prose">
            Our clinic is dedicated to delivering modern, evidence‑based HIV treatment and comprehensive sexual health services
            in a respectful, confidential, and supportive environment. We focus on clear communication, compassionate listening,
            and a structured care pathway to help you understand options, start treatment quickly, and stay engaged in long‑term wellness.
          </p>
          <ul className="mt-4 grid gap-2 text-sm text-foreground/80">
            <li>• 20+ years experience in HIV medicine and infectious diseases</li>
            <li>• Confidential and stigma‑free care</li>
            <li>• Prevention, early intervention, and long‑term management</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
