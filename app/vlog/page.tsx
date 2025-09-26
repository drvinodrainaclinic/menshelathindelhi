import Link from "next/link";
import Image from "next/image";
import { vlogPosts } from "@/data/vlog";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "Vlog | Dr. Vinod Raina Clinic",
  description: "Video guides on HIV care, PrEP/PEP, STI testing, and sexual wellness in Delhi.",
};

export default function VlogIndexPage() {
  return (
    <div className="container-page section">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Vlog" }]} />
      <h1 className="text-3xl font-semibold mb-2">Clinic Vlog</h1>
      <p className="text-foreground/80 mb-6 max-w-prose">Short videos that explain key topics in simple language—watch, pause, and learn at your own pace.</p>
      <div className="grid gap-5 sm:grid-cols-3">
        {vlogPosts.map((p) => (
          <article key={p.slug} className="card">
            <Link href={`/vlog/${p.slug}`} className="block link-underline">
              <div className="relative h-40 w-full rounded-md overflow-hidden border border-black/10 mb-3">
                <Image src={p.cover} alt={p.title} fill className="object-cover" />
              </div>
              <h2 className="text-lg font-semibold">{p.title}</h2>
              <p className="text-sm text-foreground/70 mt-1">{p.excerpt}</p>
              <p className="text-xs text-foreground/50 mt-2">{new Date(p.date).toLocaleDateString()}</p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
