import Link from "next/link";

export default function CTASection() {
  return (
    <section className="rounded-xl border border-[color-mix(in_oklab,var(--brand)_30%,transparent)] bg-[color-mix(in_oklab,var(--brand)_6%,transparent)] p-6 my-16">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold">Ready to get started?</h2>
          <p className="text-foreground/80">Request your appointment in under a minute.</p>
        </div>
        <Link href="/appointments" className="bg-[var(--brand)] text-white rounded px-5 py-2.5 hover:bg-[var(--brand-dark)] text-sm">
          Book Now
        </Link>
      </div>
    </section>
  );
}
