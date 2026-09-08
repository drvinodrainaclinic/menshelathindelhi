import Link from "next/link";
import { redirect } from "next/navigation";
import { getAllPosts } from "@/lib/actions";
import { DeleteButton } from "@/components/DeleteButton";
import { isAdmin } from "@/lib/auth";
import { blogPosts as fallback } from "@/data/blog";

export default async function AdminDashboardPage() {
  if (!(await isAdmin())) redirect("/admin/login");

  const dbPosts = await getAllPosts().catch(() => []);
  const posts = dbPosts.length > 0 ? dbPosts : fallback;

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <h2 className="text-xl font-semibold">Blog Posts ({posts.length})</h2>
        <Link href="/admin/new" className="btn btn-primary">+ Create Blog Post</Link>
      </div>

      <div className="grid gap-3 sm:grid-cols-3 mb-8">
        <Link href="/admin/new" className="card hover:!bg-[var(--muted)]">
          <h3 className="font-semibold">✍️ New Blog Post</h3>
          <p className="text-sm text-foreground/70 mt-1">Write and publish a new article.</p>
        </Link>
        <Link href="/admin/import" className="card hover:!bg-[var(--muted)]">
          <h3 className="font-semibold">📥 Import Posts</h3>
          <p className="text-sm text-foreground/70 mt-1">Bulk import from JSON or file.</p>
        </Link>
        <Link href="/admin/appointments" className="card hover:!bg-[var(--muted)]">
          <h3 className="font-semibold">📅 Appointments</h3>
          <p className="text-sm text-foreground/70 mt-1">View and manage appointment requests.</p>
        </Link>
      </div>

      <h2 className="text-lg font-semibold mb-4">All Posts</h2>
      {posts.length === 0 ? (
        <p className="text-foreground/70">No posts yet. <Link href="/admin/new" className="text-brand underline">Create one</Link>.</p>
      ) : (
        <ul className="divide-y divide-black/10 border border-black/10 rounded-md overflow-hidden bg-card">
          {posts.map((p) => (
            <li key={p.slug} className="flex items-center gap-3 p-3">
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">{p.title}</p>
                <p className="text-xs text-foreground/60 truncate">
                  /resources/{p.slug} · {new Date(p.date).toLocaleDateString()}
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <Link href={`/resources/${p.slug}`} className="btn btn-ghost !py-1.5 !px-2.5 text-xs">View</Link>
                <Link href={`/admin/edit/${p.slug}`} className="btn btn-primary !py-1.5 !px-2.5 text-xs">Edit</Link>
                <DeleteButton slug={p.slug} title={p.title} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
