import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  integrations: [mdx()],
  site: "https://mindforge2.dev",
  compressHTML: true,

  vite: {
    plugins: [tailwindcss()],
  },
});