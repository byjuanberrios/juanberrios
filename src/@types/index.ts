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

export interface BookmarksResponse {
  bookmarks: Bookmark[];
  total: number;
}

export interface Bookmark {
  id: string;
  url: string;
  title: string;
  description: string;
  tags: string[];
  user_name: UserName;
  created_at: Date;
}

export enum UserName {
  JuanBerrios = "Juan Berrios",
}

export interface RefactoredBookmark {
  url: string;
  title: string;
  description: string;
  tags: string[];
  date: Date;
}

export interface RefactoredBookmarks {
  [year: string]: RefactoredBookmark[];
}
