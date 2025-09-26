export const metadata = {
  title: "Blog | Dr. Vinod Raina Clinic",
  description: "Insights on HIV treatment, PrEP/PEP, STI testing, and sexual wellness in Delhi.",
};

import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blog";
import { vlogPosts } from "@/data/vlog";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function BlogIndexPage() {
  return (
    <div className="container-page section">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Blog" }]} />
      <h1 className="text-3xl font-semibold mb-2">Clinic Blog</h1>
      <p className="text-foreground/80 mb-6 max-w-prose">Short, practical guides on HIV care, prevention, and sexual wellness—written for Delhi.</p>
      <div className="grid gap-5 sm:grid-cols-3">
        {blogPosts.map((p) => (
          <article key={p.slug} className="card">
            <Link href={`/resources/${p.slug}`} className="block link-underline">
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

      <div className="mt-10 flex items-end justify-between">
        <h2 className="text-xl font-semibold">Latest Videos</h2>
        <Link href="/vlog" className="text-sm link-underline">View all</Link>
      </div>
      <div className="grid gap-5 sm:grid-cols-3 mt-4">
        {vlogPosts.slice(0, 3).map((v) => (
          <article key={v.slug} className="card">
            <Link href={`/vlog/${v.slug}`} className="block link-underline">
              <div className="relative h-40 w-full rounded-md overflow-hidden border border-black/10 mb-3">
                <Image src={v.cover} alt={v.title} fill className="object-cover" />
              </div>
              <h3 className="text-base font-semibold">{v.title}</h3>
              <p className="text-sm text-foreground/70 mt-1">{v.excerpt}</p>
              <p className="text-xs text-foreground/50 mt-2">{new Date(v.date).toLocaleDateString()}</p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
