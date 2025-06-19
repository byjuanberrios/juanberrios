export type SEOProps = {
  title?: string;
  description?: string;
  ogImage?: {
    src: string;
  };
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
