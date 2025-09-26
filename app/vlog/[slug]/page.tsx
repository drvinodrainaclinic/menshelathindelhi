import { vlogPosts } from "@/data/vlog";
import Breadcrumbs from "@/components/Breadcrumbs";

export async function generateStaticParams() {
  return vlogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = vlogPosts.find((p) => p.slug === params.slug);
  return {
    title: post ? `${post.title} | Vlog` : "Vlog Post",
    description: post?.excerpt || "Vlog post",
  };
}

export default function VlogPostPage({ params }: { params: { slug: string } }) {
  const post = vlogPosts.find((p) => p.slug === params.slug);
  if (!post) return <div className="container-page section">Video not found.</div>;
  return (
    <div className="container-page section">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/vlog", label: "Vlog" }, { label: post.title }]} />
      <h1 className="text-3xl font-semibold mb-2">{post.title}</h1>
      <p className="text-sm text-foreground/70 mb-4">{new Date(post.date).toLocaleDateString()}</p>
      <div className="rounded-xl overflow-hidden border border-black/10 mb-6 aspect-video">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${post.youtubeId}`}
          title={post.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <p className="text-foreground/80 max-w-prose">{post.excerpt}</p>
    </div>
  );
}
