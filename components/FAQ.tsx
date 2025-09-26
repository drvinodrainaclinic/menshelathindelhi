export default function FAQ() {
  const items = [
    {
      q: "Is my appointment confidential?",
      a: "Absolutely. We follow strict privacy standards to protect your information and dignity.",
    },
    {
      q: "Do you offer PrEP and PEP?",
      a: "Yes. We assess suitability, prescribe, and provide follow‑up for both PrEP and PEP.",
    },
    {
      q: "Can I book online?",
      a: "Yes. Use the appointment form and we will confirm your slot by phone or email.",
    },
  ];
  return (
    <section className="my-16">
      <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
      <div className="divide-y divide-black/10 dark:divide-white/10 rounded-lg border border-black/10 dark:border-white/10">
        {items.map((it, i) => (
          <details key={i} className="group p-4 open:bg-white/40 open:dark:bg-black/30">
            <summary className="cursor-pointer list-none font-medium flex items-center justify-between">
              {it.q}
              <span className="text-sm text-foreground/60 group-open:rotate-180 transition">⌄</span>
            </summary>
            <p className="mt-2 text-foreground/80">{it.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
