type ContentData = {
  type: string;
  data: string;
};

type LinkData = {
  url: string;
  content: ContentData;
};

export type DeveloperData = {
  url: string;
  content: LinkData;
};

type InfoData = {
  texts: string[];
  developer: DeveloperData;
};

type CategoryData = {
  name: string;
  links: LinkData[];
};

export type FooterData = {
  categories: CategoryData;
  info: InfoData;
};
