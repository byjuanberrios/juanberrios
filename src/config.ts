import socialImage from "./assets/images/social.webp";

export const SITE = {
  name: "Nombre del sitio web",
  description:
    "Template hecho en Astro que sirve como bootstraper para mis proyectos",
  website: "https://www.domain.com",
  author: "Name Surname",
  profile: "https://www.author.com",
  ogImage: socialImage.src,
} as const;
