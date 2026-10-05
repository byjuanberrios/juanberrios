import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";
import { cmsWishlistLoader } from "../lib/cmsWishlist";

const postCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    summary: z.string().optional(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    isPublished: z.boolean(),
    hide: z.boolean().optional().default(false),
  }),
});

const pageCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
    isPublished: z.boolean(),
  }),
});

const wikiCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/wiki" }),
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    topic: z.string(),
    updated: z.string(),
    related: z.array(z.string()).optional().default([]),
    isPublished: z.boolean(),
  }),
});

const bookmarksCollection = defineCollection({
  loader: file("./src/content/bookmarks.json"),
  schema: z.object({
    title: z.string().optional(),
    tags: z.array(z.string()),
    url: z.string(),
    category: z.string(),
    favicon: z.string(),
  }),
});

const wishlistCollection = defineCollection({
  loader: cmsWishlistLoader(),
  schema: z.object({
    name: z.string(),
    category: z.string(),
    image: z.string().nullable(),
    note: z.string().optional(),
    price: z.string().optional(),
    links: z.array(z.object({ store: z.string(), url: z.string() })).min(1),
    position: z.number(),
  }),
});

export const collections = {
  posts: postCollection,
  pages: pageCollection,
  wiki: wikiCollection,
  bookmarks: bookmarksCollection,
  wishlist: wishlistCollection,
};
