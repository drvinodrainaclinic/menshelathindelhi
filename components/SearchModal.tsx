"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const ROUTES = [
  { href: "/", title: "Home" },
  { href: "/services", title: "Services" },
  { href: "/sexual-treatment-in-delhi", title: "Treatment" },
  { href: "/doctors", title: "Doctors" },
  { href: "/appointments", title: "Book Appointment" },
  { href: "/faqs", title: "FAQs" },
  { href: "/resources", title: "Resources" },
  { href: "/testimonials", title: "Testimonials" },
  { href: "/contact", title: "Contact" },
  { href: "/privacy", title: "Privacy" },
  { href: "/terms", title: "Terms" },
];

export default function SearchModal() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    const onClose = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("open-search" as any, onOpen);
    document.addEventListener("keydown", onClose);
    return () => {
      document.removeEventListener("open-search" as any, onOpen);
      document.removeEventListener("keydown", onClose);
    };
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 10);
    } else {
      setQ("");
    }
  }, [open]);

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return ROUTES;
    return ROUTES.filter((r) => r.title.toLowerCase().includes(term) || r.href.toLowerCase().includes(term));
  }, [q]);

  function go(href: string) {
    setOpen(false);
    router.push(href);
  }

  function startVoice() {
    const SR = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
    if (!SR) return;
    if (!recognitionRef.current) {
      recognitionRef.current = new SR();
      recognitionRef.current.lang = "en-IN";
      recognitionRef.current.interimResults = false;
      recognitionRef.current.maxAlternatives = 1;
      recognitionRef.current.onresult = (e: any) => {
        const text = e.results?.[0]?.[0]?.transcript || "";
        setQ(text);
        setListening(false);
      };
      recognitionRef.current.onend = () => setListening(false);
    }
    setListening(true);
    recognitionRef.current.start();
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm flex items-start justify-center p-4" role="dialog" aria-modal="true">
      <div className="w-full max-w-2xl rounded-2xl bg-white dark:bg-neutral-900 border border-black/10 dark:border-white/10 shadow-xl">
        <div className="flex items-center gap-2 p-3 border-b border-black/10 dark:border-white/10">
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search pages…"
            className="flex-1 bg-transparent outline-none px-2 py-2"
            aria-label="Search input"
          />
          <button onClick={startVoice} className="rounded-md border px-3 py-1 text-sm hover:bg-black/5 dark:hover:bg-white/10">
            {listening ? "Listening…" : "Voice"}
          </button>
          <button onClick={() => setOpen(false)} className="rounded-md border px-3 py-1 text-sm hover:bg-black/5 dark:hover:bg-white/10">Close</button>
        </div>
        <ul className="max-h-80 overflow-auto">
          {results.map((r) => (
            <li key={r.href}>
              <button onClick={() => go(r.href)} className="w-full text-left px-4 py-3 hover:bg-black/5 dark:hover:bg-white/10">
                <div className="font-medium">{r.title}</div>
                <div className="text-xs text-foreground/60">{r.href}</div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
