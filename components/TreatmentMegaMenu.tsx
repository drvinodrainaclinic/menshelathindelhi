"use client";

import Link from "next/link";

const hivStd = [
  { href: "/treatments/hiv-treatment", label: "HIV Treatment" },
  { href: "/treatments/sti-testing", label: "STI Testing & Care" },
  { href: "/treatments/prep-pep", label: "PrEP / PEP" },
];

const sexualHealth = [
  { href: "/treatments/erectile-dysfunction", label: "Erectile Dysfunction (ED)" },
  { href: "/treatments/premature-ejaculation", label: "Premature Ejaculation (PE)" },
  { href: "/treatments/low-libido", label: "Low Libido" },
  { href: "/treatments/performance-anxiety", label: "Performance Anxiety" },
];

export default function TreatmentMegaMenu() {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[min(72rem,96vw)]">
      <div className="grid gap-6 sm:grid-cols-2 p-6 rounded-2xl glass shadow-lg">
        <div>
          <p className="font-semibold mb-2">HIV / STD Care</p>
          <ul className="grid gap-2">
            {hivStd.map((i) => (
              <li key={i.href}>
                <Link href={i.href} className="block rounded-md px-3 py-2 hover:bg-white/60 dark:hover:bg-black/40">
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-2">Sexual Health</p>
          <ul className="grid gap-2">
            {sexualHealth.map((i) => (
              <li key={i.href}>
                <Link href={i.href} className="block rounded-md px-3 py-2 hover:bg-white/60 dark:hover:bg-black/40">
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
