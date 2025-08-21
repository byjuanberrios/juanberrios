import { getCollection } from "astro:content";

export const parseDate = (dateString: string) => {
  const [year, month, day] = dateString.slice(0, 10).split("-");
  const utcDate = new Date(
    Date.UTC(Number(year), Number(month) - 1, Number(day), 12, 0, 0)
  );
  return utcDate;
};

export const formatDateInChile = (
  date: Date,
  options: Intl.DateTimeFormatOptions
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
    .slice(0, 5);

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

export const getBookmarks = async () => {
  const allBookmarks = (await getCollection("bookmarks")).reduce(
    (acc, bookmark) => {
      if (!acc[bookmark.data.category]) {
        acc[bookmark.data.category] = [];
      }

      acc[bookmark.data.category].push({
        title: bookmark.data.title || bookmark.data.url,
        tags: bookmark.data.tags,
        url: bookmark.data.url,
        favicon: bookmark.data.favicon,
      });
      return acc;
    },
    {} as Record<
      string,
      { title: string; tags: string[]; url: string; favicon: string }[]
    >
  );
  return allBookmarks;
};
