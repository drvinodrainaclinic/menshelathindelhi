"use client";

import { useEffect, useRef, useState } from "react";

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; text: string }[]>([
    { role: "assistant", text: "Hi! Ask me about HIV treatment, PrEP/PEP, STIs, or appointments." },
  ]);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  async function send() {
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");
    // If this is the first user message, redirect to WhatsApp with the typed text
    // This opens WhatsApp app on mobile or WhatsApp Web on desktop
    if (messages.filter((m) => m.role === "user").length === 0) {
      const url = `https://wa.me/919871605858?text=${encodeURIComponent(text)}`;
      window.location.href = url;
      return;
    }
    try {
      const res = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ q: text }),
      });
      const data = await res.json();
      const reply = data?.answer || "Thank you. Our team will follow up. For urgent questions, please call.";
      setMessages((m) => [...m, { role: "assistant", text: reply }]);
    } catch {
      setMessages((m) => [...m, { role: "assistant", text: "Sorry, something went wrong. Please try again." }]);
    }
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed z-[55] bottom-5 right-5 rounded-full bg-[var(--brand)] text-white w-14 h-14 shadow-lg hover:bg-[var(--brand-dark)]"
        aria-label="Open chatbot"
      >
        💬
      </button>

      {open && (
        <div className="fixed z-[60] bottom-24 right-5 w-[min(360px,92vw)] rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900 shadow-xl overflow-hidden">
          <div className="px-4 py-3 border-b border-black/10 dark:border-white/10 flex items-center justify-between">
            <div className="font-medium">AI Assistant</div>
            <button onClick={() => setOpen(false)} className="text-sm rounded-md border px-2 py-1 hover:bg-black/5 dark:hover:bg-white/10">Close</button>
          </div>
          <div ref={listRef} className="px-4 py-3 max-h-64 overflow-auto space-y-2">
            {messages.map((m, i) => (
              <div key={i} className={`text-sm ${m.role === "user" ? "text-right" : "text-left"}`}>
                <span className={`inline-block px-3 py-2 rounded-lg ${m.role === "user" ? "bg-[var(--brand)] text-white" : "bg-black/5 dark:bg-white/10"}`}>{m.text}</span>
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-black/10 dark:border-white/10 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Type your question…"
              className="flex-1 rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 outline-none"
            />
            <button onClick={send} className="rounded-md bg-[var(--brand)] text-white px-3 py-2 text-sm hover:bg-[var(--brand-dark)]">Send</button>
          </div>
        </div>
      )}
    </>
  );
}

