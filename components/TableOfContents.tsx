"use client";

import { useEffect, useState } from "react";

type Item = { id: string; text: string };

export default function TableOfContents() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const headings = Array.from(document.querySelectorAll(".prose h2, .prose h3")) as HTMLElement[];
    const parsed: Item[] = headings.map((el) => ({ id: el.id || (el.id = el.textContent?.toLowerCase().replace(/[^a-z0-9]+/g, "-") || ""), text: el.textContent || "" }));
    setItems(parsed);
  }, []);

  if (!items.length) return null;

  return (
    <aside className="card sticky top-24 max-h-[70vh] overflow-auto text-sm">
      <p className="font-semibold mb-2">On this page</p>
      <ul className="grid gap-1">
        {items.map((it) => (
          <li key={it.id}>
            <a href={`#${it.id}`} className="hover:text-[var(--brand)]">{it.text}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
