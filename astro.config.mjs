import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: 'https://johnnyevo.github.io/',
  integrations: [tailwind(), mdx(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), compress()]
});