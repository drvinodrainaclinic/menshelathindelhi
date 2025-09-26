import Link from "next/link";

export default function ResourcesMegaMenu() {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[min(28rem,92vw)]">
      <div className="glass rounded-2xl p-4 shadow-lg grid grid-cols-1">
        <p className="font-semibold mb-2">Resources</p>
        <ul className="grid gap-1">
          <li>
            <Link href="/resources" className="block rounded-md px-3 py-2 hover:bg-white/60">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/vlog" className="block rounded-md px-3 py-2 hover:bg-white/60">
              Vlog
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
