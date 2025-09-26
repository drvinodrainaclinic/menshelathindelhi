"use client";

import { useEffect, useState } from "react";

const UPI_VPA = "drvinod@upi"; // TODO: replace with your actual UPI ID
const AMOUNT = 1000;
const PAYEE_NAME = "Dr Vinod Raina";
const NOTE = "Clinic Appointment";

export default function PaymentSection() {
  const [paid, setPaid] = useState(false);
  const [utr, setUtr] = useState("");

  useEffect(() => {
    const isPaid = typeof window !== "undefined" && localStorage.getItem("appointmentPaid") === "true";
    setPaid(isPaid);
  }, []);

  const upiLink = `upi://pay?pa=${encodeURIComponent(UPI_VPA)}&pn=${encodeURIComponent(PAYEE_NAME)}&am=${AMOUNT}&cu=INR&tn=${encodeURIComponent(NOTE)}`;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(upiLink)}&size=220x220`;

  function confirmPayment(e: React.FormEvent) {
    e.preventDefault();
    if (!utr.trim()) {
      alert("Please enter the UTR/Transaction ID after payment.");
      return;
    }
    localStorage.setItem("appointmentPaid", "true");
    localStorage.setItem("appointmentUTR", utr.trim());
    setPaid(true);
    document.dispatchEvent(new CustomEvent("appointment-paid"));
  }

  return (
    <section className="card mb-8">
      <div className="flex items-start gap-4 flex-col sm:flex-row">
        <div className="shrink-0">
          <img src={qrUrl} alt="Scan to pay via UPI" className="rounded-md border border-black/10" />
        </div>
        <div className="grid gap-2">
          <h2 className="text-xl font-semibold">Pay Online (INR {AMOUNT})</h2>
          <p className="text-sm text-foreground/80">Use any UPI app to scan and pay. Or tap the button to open your UPI app directly.</p>
          <div className="flex gap-2 mt-2">
            <a href={upiLink} className="btn btn-primary" rel="noreferrer">Pay with UPI App</a>
            <button type="button" className="btn btn-ghost" onClick={() => navigator.clipboard.writeText(upiLink)}>Copy UPI Link</button>
          </div>
          <form onSubmit={confirmPayment} className="mt-3 grid sm:grid-cols-[1fr_auto] gap-2">
            <input
              type="text"
              className="border border-black/10 rounded px-3 py-2"
              placeholder="Enter UTR / Transaction ID"
              value={utr}
              onChange={(e) => setUtr(e.target.value)}
              disabled={paid}
            />
            <button className="btn btn-primary" disabled={paid}>Confirm Payment</button>
          </form>
          {paid && (
            <p className="text-sm text-mint mt-1">Payment confirmed locally. You may proceed to book your appointment.</p>
          )}
          <p className="text-xs text-foreground/60 mt-2">Note: This is a demo flow using a public QR generator. Replace UPI ID with your own and connect a real payment gateway/server verification for production.</p>
        </div>
      </div>
    </section>
  );
}
