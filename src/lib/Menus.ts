import type { MenuListProps } from "@/@types";

export const Menus: MenuListProps[] = [
  {
    name: "Inicio",
    link: "/",
  },
  {
    name: "Páginas",
    submenus: [
      {
        name: "Página de Ejemplo",
        link: "/example",
      },
      {
        name: "Enlace externo",
        link: "http://gemini.google.com",
      },
    ],
  },
  {
    name: "Otra página externa",
    link: "http://google.cl",
  },
];
