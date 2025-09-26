import { ReactNode } from "react";

export default function BenefitCard({ icon, title, desc }: { icon: ReactNode; title: string; desc: string }) {
  return (
    <div className="card shadow-sm">
      <div className="text-[var(--brand)] mb-2">{icon}</div>
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm text-foreground/80 mt-1">{desc}</p>
    </div>
  );
}
