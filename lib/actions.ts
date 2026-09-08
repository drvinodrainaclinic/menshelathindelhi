"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { verifyAdminPassword, signSession, ADMIN_COOKIE, isAdmin } from "@/lib/auth";
import { sql, ensureBlogTable, type BlogRow } from "@/lib/db";

export async function loginAction(_prevState: { error?: string }, formData: FormData) {
  const password = String(formData.get("password") ?? "");
  if (password && verifyAdminPassword(password)) {
    const store = await cookies();
    store.set(ADMIN_COOKIE, signSession(), {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 12 * 60 * 60, // 12 hours
    });
    redirect("/admin");
  }
  return { error: "Invalid password. Please try again." };
}

export async function logoutAction() {
  const store = await cookies();
  store.set(ADMIN_COOKIE, "", { httpOnly: true, path: "/", maxAge: 0 });
  redirect("/admin/login");
}

function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export async function createPostAction(_prevState: { error?: string }, formData: FormData) {
  if (!(await isAdmin())) return { error: "Not authorized." };

  await ensureBlogTable();

  const title = String(formData.get("title") ?? "").trim();
  const date = String(formData.get("date") ?? "").trim();
  const excerpt = String(formData.get("excerpt") ?? "").trim();
  const cover = String(formData.get("cover") ?? "").trim();
  const tagsRaw = String(formData.get("tags") ?? "").trim();
  const html = String(formData.get("html") ?? "").trim();
  const slugInput = String(formData.get("slug") ?? "").trim();

  if (!title || !excerpt || !html) {
    return { error: "Title, excerpt, and content are required." };
  }

  const slug = slugInput || slugify(title);
  const tags = tagsRaw
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  if (!sql) {
    return { error: "Database is not configured (DATABASE_URL missing)." };
  }

  try {
    await sql`
      INSERT INTO blog_posts (slug, title, date, excerpt, cover, tags, html)
      VALUES (${slug}, ${title}, ${date || null}, ${excerpt}, ${cover}, ${tags}, ${html})
    `;
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Unknown error";
    if (msg.includes("duplicate") || msg.includes("unique")) {
      return { error: `A post with slug "${slug}" already exists. Choose a different slug.` };
    }
    console.error("createPostAction error", e);
    return { error: "Could not create post." };
  }

  revalidatePath("/resources");
  revalidatePath("/admin");
  redirect("/admin");
}

export async function updatePostAction(_prevState: { error?: string }, formData: FormData) {
  if (!(await isAdmin())) return { error: "Not authorized." };

  await ensureBlogTable();

  const originalSlug = String(formData.get("originalSlug") ?? "").trim();
  const slug = String(formData.get("slug") ?? "").trim();
  const title = String(formData.get("title") ?? "").trim();
  const date = String(formData.get("date") ?? "").trim();
  const excerpt = String(formData.get("excerpt") ?? "").trim();
  const cover = String(formData.get("cover") ?? "").trim();
  const tagsRaw = String(formData.get("tags") ?? "").trim();
  const html = String(formData.get("html") ?? "").trim();

  if (!title || !excerpt || !html) {
    return { error: "Title, excerpt, and content are required." };
  }

  const tags = tagsRaw
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  if (!sql) {
    return { error: "Database is not configured (DATABASE_URL missing)." };
  }

  try {
    await sql`
      UPDATE blog_posts
      SET slug = ${slug}, title = ${title}, date = ${date || null},
          excerpt = ${excerpt}, cover = ${cover}, tags = ${tags}, html = ${html},
          updated_at = NOW()
      WHERE slug = ${originalSlug}
    `;
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Unknown error";
    if (msg.includes("duplicate") || msg.includes("unique")) {
      return { error: `A post with slug "${slug}" already exists.` };
    }
    console.error("updatePostAction error", e);
    return { error: "Could not update post." };
  }

  revalidatePath("/resources");
  revalidatePath("/resources/" + slug);
  revalidatePath("/admin");
  redirect("/admin");
}

export async function deletePostAction(formData: FormData) {
  if (!(await isAdmin())) return;

  await ensureBlogTable();
  const slug = String(formData.get("slug") ?? "").trim();
  if (slug && sql) {
    await sql`DELETE FROM blog_posts WHERE slug = ${slug}`;
  }

  revalidatePath("/resources");
  revalidatePath("/admin");
}

export async function getPostBySlug(slug: string): Promise<BlogRow | null> {
  if (!sql) return null;
  await ensureBlogTable();
  const rows = (await sql`SELECT * FROM blog_posts WHERE slug = ${slug} LIMIT 1`) as unknown as BlogRow[];
  return rows.length ? rows[0] : null;
}

export async function getAllPosts(): Promise<BlogRow[]> {
  if (!sql) return [];
  await ensureBlogTable();
  const rows = (await sql`SELECT * FROM blog_posts ORDER BY date DESC, id DESC`) as unknown as BlogRow[];
  return rows;
}

export type ImportResult = {
  imported: number;
  skipped: number;
  errors: string[];
};

export async function importPostsAction(
  _prevState: ImportResult | { error?: string },
  formData: FormData
): Promise<ImportResult | { error?: string }> {
  if (!(await isAdmin())) return { error: "Not authorized." };
  if (!sql) return { error: "Database is not configured (DATABASE_URL missing)." };

  await ensureBlogTable();

  const raw = String(formData.get("data") ?? "").trim();
  if (!raw) {
    return { error: "Please paste or upload the JSON data." };
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return { error: "Invalid JSON. Please check the data format." };
  }

  const list = Array.isArray(parsed) ? parsed : [parsed];

  const result: ImportResult = { imported: 0, skipped: 0, errors: [] };

  for (const item of list) {
    const obj = (item ?? {}) as Record<string, unknown>;
    const title = typeof obj.title === "string" ? obj.title.trim() : "";
    const excerpt = typeof obj.excerpt === "string" ? obj.excerpt.trim() : "";
    const html = typeof obj.html === "string" ? obj.html.trim() : "";
    const slugInput =
      typeof obj.slug === "string" ? obj.slug.trim() : "";
    const date = typeof obj.date === "string" ? obj.date.trim() : "";
    const cover = typeof obj.cover === "string" ? obj.cover.trim() : "";
    const tagsRaw = obj.tags;

    if (!title || !excerpt || !html) {
      result.errors.push(`Skipped "${title || "(untitled)"}": missing title, excerpt, or content.`);
      continue;
    }

    const slug = slugInput || slugify(title);
    const tags = Array.isArray(tagsRaw)
      ? tagsRaw.map((t) => String(t).trim()).filter(Boolean)
      : typeof tagsRaw === "string"
        ? tagsRaw.split(",").map((t) => t.trim()).filter(Boolean)
        : [];

    try {
      await sql`
        INSERT INTO blog_posts (slug, title, date, excerpt, cover, tags, html)
        VALUES (${slug}, ${title}, ${date || null}, ${excerpt}, ${cover}, ${tags}, ${html})
      `;
      result.imported++;
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Unknown error";
      if (msg.includes("duplicate") || msg.includes("unique")) {
        result.skipped++;
      } else {
        console.error("importPostsAction error", e);
        result.errors.push(`Failed to import "${title}": ${msg}`);
      }
    }
  }

  revalidatePath("/resources");
  revalidatePath("/admin");

  return result;
}
