export default function QuestionList() {
  const items = [
    "Is it safe to disclose concerns?",
    "Can I start PEP within 72 hours of exposure?",
    "Is PrEP right for me?",
    "How soon can I expect results?",
    "Is my information private and secure?",
  ];
  return (
    <ul className="grid gap-3">
      {items.map((q, i) => (
        <li key={i} className="rounded-md border border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/30 px-4 py-3">
          {q}
        </li>
      ))}
    </ul>
  );
}
