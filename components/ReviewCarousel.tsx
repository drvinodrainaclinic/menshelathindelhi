"use client";

import { useState } from "react";
import RatingStars from "@/components/RatingStars";

const REVIEWS = [
  { name: "Rahul", text: "Clear guidance and a very respectful team. Highly recommend.", rating: 5 },
  { name: "Aisha", text: "Felt safe, heard, and supported throughout.", rating: 5 },
  { name: "Mohan", text: "The doctors explained everything in simple language.", rating: 4 },
  { name: "Neha", text: "Great follow-up and easy appointment experience.", rating: 5 },
];

export default function ReviewCarousel() {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i - 1 + REVIEWS.length) % REVIEWS.length);
  const next = () => setIndex((i) => (i + 1) % REVIEWS.length);

  const current = REVIEWS[index];

  return (
    <div className="rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/30 p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="max-w-prose">
          <RatingStars rating={current.rating} />
          <p className="mt-2 text-foreground/90">“{current.text}”</p>
          <p className="mt-1 text-sm text-foreground/60">— {current.name}</p>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={prev} className="rounded-md border px-3 py-1 text-sm hover:bg-white/70 dark:hover:bg-black/40">Prev</button>
          <button onClick={next} className="rounded-md border px-3 py-1 text-sm hover:bg-white/70 dark:hover:bg-black/40">Next</button>
        </div>
      </div>
      <div className="mt-4 flex gap-1 justify-center">
        {REVIEWS.map((_, i) => (
          <span key={i} className={`h-1.5 w-4 rounded-full ${i === index ? 'bg-[var(--brand)]' : 'bg-black/20 dark:bg-white/20'}`} />
        ))}
      </div>
    </div>
  );
}
