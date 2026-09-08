import { blogPosts } from "@/data/blog";
import Breadcrumbs from "@/components/Breadcrumbs";
import Image from "next/image";
import { getPostBySlug } from "@/lib/actions";

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const dbPost = await getPostBySlug(slug).catch(() => null);
  const post = dbPost ?? blogPosts.find((p) => p.slug === slug);
  return {
    title: post ? `${post.title} | Blog` : "Blog Post",
    description: post?.excerpt || "Blog post",
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const dbPost = await getPostBySlug(slug).catch(() => null);
  const post = dbPost ?? blogPosts.find((p) => p.slug === slug);

  if (!post) return <div className="container-page section">Post not found.</div>;
  return (
    <div className="container-page section">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/resources", label: "Blog" }, { label: post.title }]} />
      <h1 className="text-3xl font-semibold mb-2">{post.title}</h1>
      <p className="text-sm text-foreground/70 mb-4">{new Date(post.date).toLocaleDateString()}</p>
      <div className="rounded-xl overflow-hidden border border-black/10 mb-6 relative h-64">
        <Image src={post.cover} alt={post.title} fill sizes="(max-width: 640px) 100vw, 1200px" className="object-cover" />
      </div>
      <article className="prose prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
}
