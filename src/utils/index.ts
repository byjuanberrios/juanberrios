import { getCollection } from "astro:content";
import { WIKIS } from "@/config";

export const parseDate = (dateString: string) => {
  const [year, month, day] = dateString.slice(0, 10).split("-");
  const utcDate = new Date(
    Date.UTC(Number(year), Number(month) - 1, Number(day), 12, 0, 0),
  );
  return utcDate;
};

export const formatDateInChile = (
  date: Date,
  options: Intl.DateTimeFormatOptions,
) => {
  return date.toLocaleString("es-CL", {
    ...options,
    timeZone: "America/Santiago",
  });
};

export type publishedPostsByYearType = {
  [key: string]: {
    slug: string;
    title: string;
    date: string;
    summary: string | undefined;
    tags: string[];
  }[];
};

export const getPublishedPosts = async () => {
  const allPosts = (await getCollection("posts"))
    .filter((entry) => entry.data.isPublished === true)
    .map((entry) => ({
      slug: entry.id,
      title: entry.data.title,
      date: entry.data.date,
      summary: entry.data.summary,
      tags: entry.data.tags,
    }))
    .sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime())
    .slice(0, 4);

  return allPosts;
};

export const getPublishedPostsByYear = async () => {
  const allPosts = (await getCollection("posts"))
    .filter((entry) => entry.data.isPublished === true)
    .map((entry) => ({
      slug: entry.id,
      title: entry.data.title,
      date: entry.data.date,
      summary: entry.data.summary,
      tags: entry.data.tags,
    }))
    .sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());

  const allPostsByYear = allPosts.reduce((acc, actualPost) => {
    const year = actualPost.date.substring(0, 4);

    if (!acc[year]) {
      acc[year] = [];
    }

    acc[year] = [actualPost, ...acc[year]];

    return acc;
  }, {} as publishedPostsByYearType);

  return allPostsByYear;
};

export type wikiEntriesByTopicType = {
  [key: string]: {
    slug: string;
    title: string;
    summary: string | undefined;
    updated: string;
  }[];
};

const getPublishedWikiEntries = async () =>
  (await getCollection("wiki")).filter((entry) => entry.data.isPublished === true);

export const getWikiSlug = (id: string) => id.split("/")[0];

export const getEntrySlug = (id: string) => id.split("/").slice(1).join("/");

export const getWikis = async () => {
  const entries = await getPublishedWikiEntries();

  return WIKIS.map((wiki) => ({
    ...wiki,
    count: entries.filter((entry) => getWikiSlug(entry.id) === wiki.slug).length,
  })).filter((wiki) => wiki.count > 0);
};

export const getWikiEntriesByTopic = async (wikiSlug: string) => {
  const entries = (await getPublishedWikiEntries())
    .filter((entry) => getWikiSlug(entry.id) === wikiSlug)
    .map((entry) => ({
      slug: getEntrySlug(entry.id),
      title: entry.data.title,
      summary: entry.data.summary,
      topic: entry.data.topic,
      updated: entry.data.updated,
    }))
    .sort((a, b) => a.title.localeCompare(b.title, "es"));

  const entriesByTopic = entries.reduce((acc, entry) => {
    if (!acc[entry.topic]) {
      acc[entry.topic] = [];
    }

    acc[entry.topic].push({
      slug: entry.slug,
      title: entry.title,
      summary: entry.summary,
      updated: entry.updated,
    });

    return acc;
  }, {} as wikiEntriesByTopicType);

  return entriesByTopic;
};

const HTML_ENTITIES: Record<string, string> = {
  "&mdash;": "—",
  "&ndash;": "–",
  "&hellip;": "…",
  "&nbsp;": " ",
  "&quot;": '"',
  "&#39;": "'",
  "&apos;": "'",
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
};

const decodeHtmlEntities = (text: string) =>
  text.replace(
    /&[a-z#0-9]+;/gi,
    (entity) => HTML_ENTITIES[entity.toLowerCase()] ?? entity,
  );

export const getBookmarks = async () => {
  const allBookmarks = (await getCollection("bookmarks")).reduce(
    (acc, bookmark) => {
      if (!acc[bookmark.data.category]) {
        acc[bookmark.data.category] = [];
      }

      const rawTitle = bookmark.data.title || bookmark.data.url;

      acc[bookmark.data.category].push({
        title: decodeHtmlEntities(rawTitle).trim(),
        tags: bookmark.data.tags,
        url: bookmark.data.url,
        favicon: bookmark.data.favicon,
      });
      return acc;
    },
    {} as Record<
      string,
      { title: string; tags: string[]; url: string; favicon: string }[]
    >,
  );
  return allBookmarks;
};
