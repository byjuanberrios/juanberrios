export type SEOProps = {
  title?: string;
  description?: string;
  /** Ruta absoluta del sitio, ej. "/og/posts/arc.png". */
  ogImage?: string;
  ogType?: "website" | "article";
  /** Fecha ISO; solo se emite cuando ogType es "article". */
  publishedTime?: string;
  copyrightText?: string;
  twitterUsername?: string;
  twitterDomain?: string;
};

export interface MenuListItem {
  name: string;
  link?: string;
}

export interface MenuListProps extends MenuListItem {
  submenus?: MenuListItem[];
}
