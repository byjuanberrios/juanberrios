export const SITE: {
  name: string;
  description: string;
  website: string;
  author: string;
  profile: string;
  ogImage: string;
  copyright?: string;
  twitterUsername?: string;
  twitterDomain?: string;
} = {
  name: "Juan Berrios",
  description: "Sitio web personal de Juan Berrios",
  website: "https://juanberrios.com",
  author: "Juan Berrios",
  profile: "https://juanberrios.com",
  ogImage: "/og.png",
} as const;

export const WIKIS: {
  slug: string;
  name: string;
  description: string;
  intro: string;
}[] = [
  {
    slug: "teologia",
    name: "Teología",
    description: "Apuntes de lectura sobre teología reformada",
    intro:
      "Apuntes de un lector, no una enciclopedia. Son notas que voy escribiendo para entender mejor lo que creo, y que corrijo cuando entiendo algo mejor. No están terminadas y probablemente nunca lo estén.",
  },
];
