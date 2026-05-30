// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Production URL — used for sitemap, canonical URLs, and OG tags.
  site: 'https://anastacia.design',
  integrations: [mdx(), sitemap()],
  build: {
    // Emit `page/index.html` so Cloudflare Pages serves clean URLs.
    format: 'directory',
  },
});
