export const metadata = {
  title: "Contact | Dr. Vinod Raina Clinic",
  description: "Get in touch for appointments and queries.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-lg border border-black/10 dark:border-white/10 p-6">
          <h2 className="font-medium mb-2">Clinic Details</h2>
          <p className="text-foreground/80">Address: [Replace with clinic address]</p>
          <p className="text-foreground/80">Phone: [Replace with contact number]</p>
          <p className="text-foreground/80">Email: [Replace with official email]</p>
          <p className="text-xs text-foreground/60 mt-3">Note: Replace placeholders with verified contact information.</p>
        </div>
        <div className="rounded-lg border border-black/10 dark:border-white/10 p-6">
          <h2 className="font-medium mb-2">Working Hours</h2>
          <ul className="text-foreground/80 space-y-1">
            <li>Mon–Fri: 9:00 AM – 6:00 PM</li>
            <li>Sat: 9:00 AM – 2:00 PM</li>
            <li>Sun: Closed</li>
          </ul>
        </div>
      </div>
      <div className="rounded-xl border border-black/10 dark:border-white/10 overflow-hidden mt-8">
        <div className="relative h-56 sm:h-72">
          <img src="/images/map.svg" alt="Map placeholder" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}
