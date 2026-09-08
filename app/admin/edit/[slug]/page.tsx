import { notFound, redirect } from "next/navigation";
import { PostForm } from "@/components/PostForm";
import { getPostBySlug, updatePostAction } from "@/lib/actions";
import { isAdmin } from "@/lib/auth";
import { blogPosts as fallback } from "@/data/blog";

export default async function EditPostPage({ params }: { params: Promise<{ slug: string }> }) {
  if (!(await isAdmin())) redirect("/admin/login");

  const { slug } = await params;
  const dbPost = await getPostBySlug(slug).catch(() => null);
  const post = dbPost ?? fallback.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Edit Blog Post</h2>
      <PostForm
        action={updatePostAction}
        submitLabel="Save changes"
        initial={{
          slug: post.slug,
          title: post.title,
          date: post.date,
          excerpt: post.excerpt,
          cover: post.cover,
          tags: (post.tags ?? []).join(", "),
          html: post.html,
        }}
      />
    </div>
  );
}
