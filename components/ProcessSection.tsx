export default function ProcessSection() {
  const steps = [
    {
      title: "Initial Consultation",
      desc: "First meeting to understand concerns, set goals, and determine the right fit.",
    },
    {
      title: "Clinical Assessment",
      desc: "Collect psychological, emotional, and behavioral data via interviews and questionnaires.",
    },
    {
      title: "Diagnosis & Plan",
      desc: "Identify conditions based on results and create a personalized treatment plan.",
    },
    {
      title: "Follow‑Up & Support",
      desc: "Regular reviews, progress tracking, and adjustments as needs evolve.",
    },
  ];

  return (
    <section className="section">
      <div className="flex items-end justify-between gap-4 mb-6">
        <div>
          <span className="badge">How It Works</span>
          <h2 className="mt-3 text-3xl font-semibold">Structured Path to Care</h2>
          <p className="mt-2 text-foreground/80 max-w-prose">
            Understanding through connection. Our step‑by‑step process is designed to be clear and supportive.
          </p>
        </div>
      </div>

      <ol className="relative border-l border-black/10 dark:border-white/10 pl-6 grid gap-6">
        {steps.map((s, i) => (
          <li key={s.title} className="card bg-white/70 dark:bg-black/30">
            <div className="flex items-start gap-4">
              <span className="shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--brand-contrast)] text-[var(--brand)] font-semibold border border-black/10 dark:border-white/10">{i + 1}</span>
              <div>
                <h3 className="font-semibold">{s.title}</h3>
                <p className="text-sm text-foreground/80 mt-1">{s.desc}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
