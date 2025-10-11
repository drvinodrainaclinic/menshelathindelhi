"use client";

export default function FloatingContacts() {
  const displayNumber = "+91 98716 05858";
  const telHref = "tel:+919871605858"; // international format for dialing
  const whatsappHref = "https://wa.me/919871605858?text=Hello%20Doctor%2C%20I%20would%20like%20to%20connect.";

  return (
    <div className="fixed bottom-4 left-4 z-40 flex flex-col gap-2">
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary shadow-sm px-4 py-2 rounded-full flex items-center gap-2"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <span aria-hidden>💬</span>
        <span className="font-semibold">WhatsApp</span>
      </a>
      <a
        href={telHref}
        className="btn btn-ghost shadow-sm px-4 py-2 rounded-full flex items-center gap-2"
        aria-label={`Call ${displayNumber}`}
        title={`Call ${displayNumber}`}
      >
        <span aria-hidden>📞</span>
        <span className="font-semibold">{displayNumber}</span>
      </a>
    </div>
  );
}
