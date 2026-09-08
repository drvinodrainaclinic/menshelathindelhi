"use client";

import { useActionState } from "react";

type PostState = { error?: string };

export function PostForm({
  action,
  initial,
  submitLabel,
}: {
  action: (prev: PostState, formData: FormData) => Promise<PostState>;
  initial?: {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    cover: string;
    tags: string;
    html: string;
  };
  submitLabel: string;
}) {
  const [state, formAction, pending] = useActionState(action, { error: "" });

  return (
    <form action={formAction} className="flex flex-col gap-4 max-w-2xl">
      {initial?.slug && <input type="hidden" name="originalSlug" value={initial.slug} />}

      <label className="flex flex-col gap-1 text-sm">
        Title *
        <input
          name="title"
          required
          defaultValue={initial?.title}
          className="border border-black/15 rounded-md px-3 py-2 focus:outline-none focus:border-brand"
        />
      </label>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="flex flex-col gap-1 text-sm">
          Slug
          <input
            name="slug"
            defaultValue={initial?.slug}
            placeholder="auto-generated from title"
            className="border border-black/15 rounded-md px-3 py-2 focus:outline-none focus:border-brand"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm">
          Date
          <input
            type="date"
            name="date"
            defaultValue={initial?.date ?? new Date().toISOString().slice(0, 10)}
            className="border border-black/15 rounded-md px-3 py-2 focus:outline-none focus:border-brand"
          />
        </label>
      </div>

      <label className="flex flex-col gap-1 text-sm">
        Excerpt *
        <textarea
          name="excerpt"
          required
          rows={3}
          defaultValue={initial?.excerpt}
          className="border border-black/15 rounded-md px-3 py-2 focus:outline-none focus:border-brand"
        />
      </label>

      <label className="flex flex-col gap-1 text-sm">
        Cover image URL
        <input
          name="cover"
          defaultValue={initial?.cover}
          placeholder="https://…"
          className="border border-black/15 rounded-md px-3 py-2 focus:outline-none focus:border-brand"
        />
      </label>

      <label className="flex flex-col gap-1 text-sm">
        Tags (comma separated)
        <input
          name="tags"
          defaultValue={initial?.tags}
          placeholder="HIV, ART, Delhi"
          className="border border-black/15 rounded-md px-3 py-2 focus:outline-none focus:border-brand"
        />
      </label>

      <label className="flex flex-col gap-1 text-sm">
        Content (HTML) *
        <textarea
          name="html"
          required
          rows={16}
          defaultValue={initial?.html}
          className="border border-black/15 rounded-md px-3 py-2 font-mono text-sm focus:outline-none focus:border-brand"
          placeholder={"<h2>Heading</h2>\n<p>Paragraph…</p>"}
        />
      </label>

      {state?.error && <p className="text-sm text-brand">{state.error}</p>}

      <div className="flex items-center gap-3">
        <button type="submit" disabled={pending} className="btn btn-primary">
          {pending ? "Saving…" : submitLabel}
        </button>
        <a href="/admin" className="btn btn-ghost">Cancel</a>
      </div>
    </form>
  );
}
