export const prerender = false;

import type { APIRoute } from "astro";
import fs from "fs";
import path from "path";

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const file = formData.get("image") as File;
    const slug = formData.get("slug") as string;

    if (!file || !slug) return new Response(JSON.stringify({ error: "Brak pliku lub sluga" }), { status: 400 });
    if (!/^[a-z0-9-]+$/.test(slug)) return new Response(JSON.stringify({ error: "Nieprawidlowy slug" }), { status: 400 });

    const allowedTypes = ["image/png", "image/jpeg", "image/gif", "image/webp", "image/svg+xml"];
    if (!allowedTypes.includes(file.type)) {
      return new Response(JSON.stringify({ error: "Niedozwolony typ pliku" }), { status: 415 });
    }

    const maxSize = 10 * 1024 * 1024; // 10 MB
    if (file.size > maxSize) {
      return new Response(JSON.stringify({ error: "Plik za duzy (max 10 MB)" }), { status: 413 });
    }

    const dir = path.join(process.cwd(), "public", "articles", slug);
    fs.mkdirSync(dir, { recursive: true });

    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-");
    const filePath = path.join(dir, safeName);

    const buffer = Buffer.from(await file.arrayBuffer());
    fs.writeFileSync(filePath, buffer);

    const urlPath = `/articles/${slug}/${safeName}`;
    return new Response(JSON.stringify({ data: { filePath: urlPath } }), { status: 200 });
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
};
