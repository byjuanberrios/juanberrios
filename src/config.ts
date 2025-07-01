import socialImage from "./assets/images/social.webp";

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
  ogImage: socialImage.src,
  // copyright: "(c) Nombre de la empresa",
  // twitterUsername: "@nombredeusuario",
  // twitterDomain: "www.example.com",
} as const;
