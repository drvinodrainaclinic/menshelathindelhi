import { redirect } from "next/navigation";
import { PostForm } from "@/components/PostForm";
import { createPostAction } from "@/lib/actions";
import { isAdmin } from "@/lib/auth";

export default async function NewPostPage() {
  if (!(await isAdmin())) redirect("/admin/login");

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Create New Blog Post</h2>
      <PostForm action={createPostAction} submitLabel="Create post" />
    </div>
  );
}
