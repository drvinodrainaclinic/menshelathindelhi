import Link from "next/link";

export default function ServicesMegaMenu() {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[min(32rem,92vw)]">
      <div className="glass rounded-2xl p-4 shadow-lg grid grid-cols-1">
        <p className="font-semibold mb-2">Services</p>
        <ul className="grid gap-1">
          <li>
            <Link href="/services" className="block rounded-md px-3 py-2 hover:bg-white/60">
              All Services
            </Link>
          </li>
          <li>
            <Link href="/services/vip-consultation" className="block rounded-md px-3 py-2 hover:bg-white/60">
              VIP Consultation
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
