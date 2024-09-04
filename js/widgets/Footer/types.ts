type ContentData = {
  type: string;
  data: string;
};

type LinkData = {
  url: string;
  content: ContentData;
};

type CategoriesData = {
  name: string;
  links: LinkData[];
};

type DeveloperData = {
  url: string;
  content: ContentData;
};

type InfoData = {
  texts: string[];
  developer: DeveloperData;
};

export type FooterData = {
  categories: CategoriesData[];
  info: InfoData;
};
