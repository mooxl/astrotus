import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
import critters from "astro-critters";

export default defineConfig({
  integrations: [
    tailwind(),
    image(),
    compress(),
    sitemap(),
    prefetch(),
    critters(),
  ],
});
