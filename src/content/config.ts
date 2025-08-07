import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const postCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    summary: z.string().optional(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    isPublished: z.boolean(),
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

export const collections = { posts: postCollection, pages: pageCollection };
