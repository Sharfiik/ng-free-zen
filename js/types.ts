/**********************************************
  Common types
**********************************************/
export type TitleData = {
  content: string;
  priority: number;
};

export type ImageData = {
  source: string;
  description: string;
};

export type LinkData = {
  url: string;
  name: string;
};

/**********************************************
  Header types
**********************************************/

export type LangsData = {
  key: string;
  name: string;
};

export type NavigationData = {
  key: string;
  name: string;
};

export type HeaderData = {
  langs: LangsData[];
  navigation: NavigationData[];
};


/**********************************************
  Download types
**********************************************/

export type DownloadData = {
  title: TitleData;
  texts: string[];
  links: LinkData[];
  image: ImageData;
};

/**********************************************
  Warranty types
**********************************************/

export type WarrantyData = {
  title: TitleData;
  texts: string[];
  image: ImageData;
};

/**********************************************
  Care types
**********************************************/

export type CareData = {
  title: TitleData;
  texts: string[];
  image: ImageData;
};

/**********************************************
  Cashback types
**********************************************/

export type CashbackData = {
  title: TitleData;
  texts: string[];
  buttonText: string;
};

export type ButtonData = string;

/**********************************************
  Clients types
**********************************************/

export type Source = {
  lightSource: string;
  darkSource: string;
};

export type Client = {
  name: string;
  logo: Source;
};

export type BrandsFromAPI = {
  brands: Client[];
};

/**********************************************
  Footer types
**********************************************/

export type ContentData = {
  type: string;
  data: string;
};

export type LinkDataCategory = {
  url: string;
  content: ContentData;
};

export type CategoryData = {
  name: string;
  links: LinkDataCategory[];
};

export type DeveloperData = {
  url: string;
  content: ContentData;
};

export type InfoData = {
  texts: string[];
  developer: DeveloperData;
};

export type CategoriesData = {
  name: string;
  links: LinkDataCategory[];
};

export type FooterData = {
  categories: CategoriesData[];
  info: InfoData;
};

/**********************************************
  App
**********************************************/

export type AppData = {
  primaryInfo: HeaderData;
  download: DownloadData;
  warranty: WarrantyData;
  care: CareData;
  cashback: CashbackData;
  clients: BrandsFromAPI;
  secondaryInfo: FooterData;
};

/*********************************************/
