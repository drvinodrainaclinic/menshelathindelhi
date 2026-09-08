"use client";

import { useActionState, useRef, useState } from "react";
import { importPostsAction, type ImportResult } from "@/lib/actions";

type State = ImportResult | { error?: string };

export function ImportForm() {
  const [state, formAction, pending] = useActionState<State, FormData>(importPostsAction, { imported: 0, skipped: 0, errors: [] });
  const [data, setData] = useState("");
  const [fileName, setFileName] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const imp = "imported" in state ? state : null;
  const error = "error" in state ? (state as { error?: string }).error : undefined;

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = () => setData(String(reader.result ?? ""));
    reader.readAsText(file);
  }

  return (
    <div className="max-w-2xl">
      <p className="text-sm text-foreground/70 mb-4">
        Import blog posts from a JSON file or pasted JSON. Format: an array of posts or a single
        object, each with <code>slug</code>, <code>title</code>, <code>date</code>,{" "}
        <code>excerpt</code>, <code>cover</code>, <code>tags</code>, and <code>html</code>. Posts
        with a slug that already exist are skipped.
      </p>

      <form action={formAction} className="flex flex-col gap-4">
        <label className="flex flex-col gap-1 text-sm">
          JSON file
          <input
            ref={fileRef}
            type="file"
            accept=".json,application/json"
            onChange={handleFile}
            className="text-sm"
          />
          {fileName && <span className="text-xs text-foreground/60">Loaded: {fileName}</span>}
        </label>

        <label className="flex flex-col gap-1 text-sm">
          Or paste JSON
          <textarea
            name="data"
            rows={14}
            required
            value={data}
            onChange={(e) => setData(e.target.value)}
            placeholder={'[\n  {\n    "slug": "my-post",\n    "title": "My Post",\n    "excerpt": "…",\n    "html": "<h2>…</h2>",\n    "tags": ["HIV", "Delhi"]\n  }\n]'}
            className="border border-black/15 rounded-md px-3 py-2 font-mono text-sm focus:outline-none focus:border-brand"
          />
        </label>

        {error && <p className="text-sm text-brand">{error}</p>}
        {imp && (imp.imported > 0 || imp.skipped > 0 || imp.errors.length > 0) && (
          <div className="text-sm border border-black/10 rounded-md p-3">
            <p className="font-medium">
              Imported: {imp.imported} · Skipped (duplicates): {imp.skipped}
            </p>
            {imp.errors.length > 0 && (
              <ul className="list-disc pl-5 mt-2 text-brand">
                {imp.errors.map((e, i) => (
                  <li key={i}>{e}</li>
                ))}
              </ul>
            )}
          </div>
        )}

        <button type="submit" disabled={pending || !data.trim()} className="btn btn-primary">
          {pending ? "Importing…" : "Import posts"}
        </button>
      </form>
    </div>
  );
}
