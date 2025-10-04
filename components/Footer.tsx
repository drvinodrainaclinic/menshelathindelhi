export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 mt-16 bg-[var(--muted)] dark:bg-[var(--muted-2)]/40">
      <div className="container-page py-10 text-sm text-foreground/80 grid gap-8 lg:grid-cols-4">
        <div>
          <p className="font-medium text-foreground">Dr. Vinod Raina Clinic</p>
          <p>HIV Treatment & Sexual Health</p>
          <p className="mt-2 text-foreground/70">
            Compassionate, confidential care for HIV treatment, prevention, and sexual wellness.
          </p>
        </div>

        <div>
          <p className="font-medium text-foreground">Our Contacts</p>
          <address className="not-italic mt-2 space-y-2">
            <p>E-34, EKTA APARTMENT, Saket,<br />Near Opposite, Malviya Nagar Metro Station,<br />New Delhi - 110017</p>
            <p>
              <a className="hover:text-[var(--brand)]" href="tel:+917687878787">+91 76878 78787</a>,
              {" "}
              <a className="hover:text-[var(--brand)]" href="tel:+919871605858">+91 98716 05858</a>
            </p>
            <p>
              <a className="hover:text-[var(--brand)]" href="mailto:drvinodbhartiraina@gmail.com">drvinodbhartiraina@gmail.com</a>
            </p>
          </address>
        </div>

        <div>
          <p className="font-medium text-foreground">Hours</p>
          <ul className="mt-2 space-y-1">
            <li>Mon–Sat: 10:00 AM – 7:00 PM</li>
            <li>Sun: 12:00 PM – 3:00 PM</li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-foreground">Dr. Vinod Raina Awards</p>
          <ul className="mt-2 space-y-1 list-disc pl-5">
            <li>&quot;Dr. B.R. Ambedkar, Seva Ratna Award&quot; 2012 for Best Sexologist doctor in Delhi</li>
            <li>&quot;Best Sexologist in Delhi 2012&quot; by Prime Time Research Media</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-black/10 dark:border-white/10">
        <div className="container-page py-4 text-xs text-foreground/60 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Dr. Vinod Raina Clinic. All rights reserved.</p>
          <p>Built with Next.js · <a className="hover:text-[var(--brand)]" href="/appointments">Book Appointment</a></p>
        </div>
      </div>
    </footer>
  );
}
