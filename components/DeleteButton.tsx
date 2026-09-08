"use client";

import { useTransition } from "react";
import { deletePostAction } from "@/lib/actions";

export function DeleteButton({ slug, title }: { slug: string; title: string }) {
  const [pending, startTransition] = useTransition();

  return (
    <form
      action={(formData) => {
        if (!confirm(`Delete "${title}"?`)) return;
        startTransition(() => deletePostAction(formData));
      }}
    >
      <input type="hidden" name="slug" value={slug} />
      <button
        type="submit"
        disabled={pending}
        className="btn btn-ghost !py-1.5 !px-2.5 text-xs text-brand hover:bg-brand hover:text-white"
      >
        {pending ? "Deleting…" : "Delete"}
      </button>
    </form>
  );
}
