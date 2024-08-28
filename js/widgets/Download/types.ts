export type TitleData = {
  content: string;
  priority: number;
};

type LinkData = {
  name: string;
  url: string;
};

type ImageData = {
  source: string;
  description: string;
};

export type DownloadData = {
  title: TitleData;
  texts: string[];
  links: LinkData[];
  image: ImageData;
};
