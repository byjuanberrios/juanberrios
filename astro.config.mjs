// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx(), icon({
    iconDir: "src/assets/icons",
  })],
  adapter: cloudflare(),
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias:
        process.env.NODE_ENV === 'production'
          ? {
              'react-dom/server': 'react-dom/server.edge',
            }
          : undefined,
    },
  },
  redirects: {
    '/about': '/',
    '/blog': '/posts',
    "/blog/[post]": "/posts/[post]",
    "/links": "/bookmarks",
    "/works": "https://juanberrios.dev",
  },
  experimental: {
    fonts: [
      {
        name: "Newsreader",
        provider: fontProviders.fontsource(),
        cssVariable: "--font-newsreader",
        weights: [400, 600, 700],
        styles: ["normal", "italic"],
        display: "swap",
        subsets: ["latin"]
      },
      {
        name: "Inter",
        provider: fontProviders.google(),
        cssVariable: "--font-inter",
        weights: ["400 700"],
        styles: ["normal", "italic"],
        display: "swap",
        subsets: ["latin"]
      },
      {
        name: "Inter Tight",
        provider: fontProviders.google(),
        cssVariable: "--font-interdisplay",
        weights: ["400 700"],
        styles: ["normal", "italic"],
        display: "swap",
        subsets: ["latin"]
      }
    ]
  }
});