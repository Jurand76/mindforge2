import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import tailwindcss from "@tailwindcss/vite";

import node from "@astrojs/node";

export default defineConfig({
  integrations: [mdx()],
  site: "https://mindforge2.dev",
  compressHTML: true,

  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        ignored: ["**/src/content/blog/**"],
      },
    },
  },

  adapter: node({
    mode: "standalone",
  }),
});