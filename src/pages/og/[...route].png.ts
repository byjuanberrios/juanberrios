import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection } from "astro:content";
import { Resvg } from "@resvg/resvg-js";
import satori from "satori";
import fs from "node:fs/promises";

import { SITE, WIKIS } from "@/config";
import { formatDateInChile, getWikiSlug, parseDate } from "@/utils";

const WIDTH = 1200;
const HEIGHT = 630;

// Paleta tomada del <body> en Layout.astro y de global.css.
const BACKGROUND = "#EDEDEB";
const FOREGROUND = "#27272a"; // zinc-800
const MUTED = "#71717a"; // zinc-500

// Satori acepta ttf/otf/woff, pero NO woff2. Los .woff de fontsource se
// versionan en node_modules; no se leen de .astro/fonts porque ese directorio
// es caché gitignoreado con nombres hasheados.
const FONT_DIR = "node_modules/@fontsource/newsreader/files";

const loadFonts = async () =>
  Promise.all(
    [
      { weight: 400 as const, file: "newsreader-latin-400-normal.woff" },
      { weight: 600 as const, file: "newsreader-latin-600-normal.woff" },
    ].map(async ({ weight, file }) => ({
      name: "Newsreader",
      data: await fs.readFile(`${FONT_DIR}/${file}`),
      weight,
      style: "normal" as const,
    })),
  );

/** Evita que un título largo desborde la tarjeta. */
const fitTitle = (title: string) => {
  const text = title.length > 110 ? `${title.slice(0, 109).trimEnd()}…` : title;
  const size = text.length <= 40 ? 76 : text.length <= 80 ? 60 : 48;
  return { text, size };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getCollection("posts", ({ data }) => data.hide !== true);
  const entries = await getCollection(
    "wiki",
    ({ data }) => data.isPublished === true,
  );

  const postPaths = posts.map((post) => ({
    params: { route: `posts/${post.id}` },
    props: {
      title: post.data.title,
      kicker: formatDateInChile(parseDate(post.data.date), {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    },
  }));

  const wikiPaths = entries.map((entry) => ({
    params: { route: `wiki/${entry.id}` },
    props: {
      title: entry.data.title,
      kicker:
        WIKIS.find((wiki) => wiki.slug === getWikiSlug(entry.id))?.name ??
        "Wiki",
    },
  }));

  return [...postPaths, ...wikiPaths];
};

export const GET: APIRoute = async ({ props }) => {
  const { title, kicker } = props as { title: string; kicker: string };
  const heading = fitTitle(title);

  const svg = await satori(
    {
      type: "div",
      props: {
        style: {
          width: WIDTH,
          height: HEIGHT,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          backgroundColor: BACKGROUND,
          fontFamily: "Newsreader",
          color: FOREGROUND,
        },
        children: [
          {
            type: "div",
            props: {
              style: { fontSize: 28, color: MUTED },
              children: kicker,
            },
          },
          {
            type: "div",
            props: {
              style: {
                fontSize: heading.size,
                fontWeight: 600,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              },
              children: heading.text,
            },
          },
          {
            type: "div",
            props: {
              style: { fontSize: 28, color: MUTED },
              children: SITE.website.replace(/^https?:\/\//, ""),
            },
          },
        ],
      },
    },
    { width: WIDTH, height: HEIGHT, fonts: await loadFonts() },
  );

  const png = new Resvg(svg, {
    fitTo: { mode: "width", value: WIDTH },
  })
    .render()
    .asPng();

  return new Response(new Uint8Array(png), {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};
