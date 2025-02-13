import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    integrations: [mdx(), sitemap()],
    outDir: "./build",
    site: "https://www.judcole.com",
    vite: {
        plugins: [tailwindcss()],
    },
});
