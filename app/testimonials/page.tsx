import TestimonialCard from "@/components/TestimonialCard";

export const metadata = {
  title: "Testimonials | Dr. Vinod Raina Clinic",
  description: "What our patients say about their care experience.",
};

export default function TestimonialsPage() {
  const items = [
    { name: "A.K.", quote: "The clinic staff made me feel safe and respected from day one." },
    { name: "R.S.", quote: "Clear guidance on PrEP and excellent follow‑up support." },
    { name: "M.P.", quote: "Professional, compassionate, and highly knowledgeable doctors." },
  ];
  return (
    <div className="container-page section">
      <h1 className="text-3xl font-semibold mb-2">Patient Testimonials</h1>
      <p className="text-foreground/80 mb-6 max-w-prose">Real words from people who value privacy, clarity, and compassionate care in Delhi.</p>
      <div className="grid gap-4 sm:grid-cols-3">
        {items.map((t) => (
          <TestimonialCard key={t.name} name={t.name} quote={t.quote} />
        ))}
      </div>
      <p className="text-xs text-foreground/60 mt-4">Testimonials are anonymized and illustrative. Replace with verified reviews.</p>
    </div>
  );
}
