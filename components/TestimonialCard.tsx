export default function TestimonialCard({ name, quote }: { name: string; quote: string }) {
  return (
    <blockquote className="card">
      <p className="text-foreground/90">“{quote}”</p>
      <footer className="mt-2 text-sm text-foreground/60">— {name}</footer>
    </blockquote>
  );
}
