import { getCollection } from "astro:content";

export type publishedPostsByYearType = {
  [key: string]: {
    slug: string;
    title: string;
    date: string;
    summary: string | undefined;
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
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
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
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

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
