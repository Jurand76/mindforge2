export const prerender = false;

import type { APIRoute } from "astro";
import fs from "fs";
import path from "path";

export const GET: APIRoute = async ({ params }) => {
  const { slug } = params;
  if (!slug || !/^[a-z0-9-]+$/.test(slug)) return new Response("Invalid slug", { status: 400 });

  const mdxPath = path.join(process.cwd(), "src", "content", "blog", slug, "index.mdx");
  if (!fs.existsSync(mdxPath)) return new Response("Not found", { status: 404 });

  const raw = fs.readFileSync(mdxPath, "utf-8");
  const fmMatch = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)/);
  if (!fmMatch) return new Response(JSON.stringify({ content: raw }), { status: 200 });

  const fm = fmMatch[1];
  const body = fmMatch[2].trim();
  const data: any = {};
  fm.split("\n").forEach((line) => {
    const m = line.match(/^(\w+):\s*(.+)/);
    if (!m) return;
    const val = m[2].replace(/^["']|["']$/g, "").trim();
    data[m[1]] = val;
  });

  return new Response(JSON.stringify({
    slug,
    title: data.title || "",
    category: data.category || "psychologia",
    date: data.date || "",
    description: data.description || "",
    tags: data.tags || "",
    author: data.author || "",
    content: body,
  }), { status: 200 });
};
