export const prerender = false;

import type { APIRoute } from "astro";
import fs from "fs";
import path from "path";

export const POST: APIRoute = async ({ request }) => {
  try {
    const { slug, mdx } = await request.json();
    if (!slug || !mdx) return new Response("Missing slug or mdx", { status: 400 });
    if (!/^[a-z0-9-]+$/.test(slug)) return new Response("Invalid slug", { status: 400 });

    const dir = path.join(process.cwd(), "src", "content", "blog", slug);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, "index.mdx"), mdx, "utf-8");

    return new Response(JSON.stringify({ ok: true, message: "Zapisano. Zrestartuj npm run dev." }), { status: 200 });
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
};
