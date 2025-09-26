import { blogPosts } from "@/data/blog";
import Breadcrumbs from "@/components/Breadcrumbs";

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  return {
    title: post ? `${post.title} | Blog` : "Blog Post",
    description: post?.excerpt || "Blog post",
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return <div className="container-page section">Post not found.</div>;
  return (
    <div className="container-page section">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/resources", label: "Blog" }, { label: post.title }]} />
      <h1 className="text-3xl font-semibold mb-2">{post.title}</h1>
      <p className="text-sm text-foreground/70 mb-4">{new Date(post.date).toLocaleDateString()}</p>
      <div className="rounded-xl overflow-hidden border border-black/10 mb-6">
        <img src={post.cover} alt={post.title} className="w-full h-64 object-cover" />
      </div>
      <article className="prose prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
}
