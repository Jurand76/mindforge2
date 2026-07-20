import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import tailwindcss from "@tailwindcss/vite";

import netlify from "@astrojs/netlify";

export default defineConfig({
  integrations: [mdx()],
  site: "https://mindforge2.dev",
  compressHTML: true,

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: netlify(),
});