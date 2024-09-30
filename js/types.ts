/**********************************************
  Common types
**********************************************/
export type TitleData = {
  content: string;
  priority: number;
};

export type ImageData = {
  description: string;
  source: string;
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

export type Navigation = {
  anchor: string;
  name: string;
};

export type HeaderData = {
  langs: LangsData[];
  navigation: Navigation[];
};


/**********************************************
  Download types
**********************************************/

export type DownloadData = {
  title: TitleData;
  texts: string[];
  links: LinkData[];
  images: ImageData;
};

/**********************************************
  Warranty types
**********************************************/

export type WarrantyData = {
  title: TitleData;
  texts: string[];
  images: ImageData;
};

/**********************************************
  Care types
**********************************************/

export type CareData = {
  title: TitleData;
  texts: string[];
  images: ImageData;
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

export type Brands = {
  name: string;
  logo: Source;
};

export type ClientsData = {
  brands: Brands[];
};


/**********************************************
  Footer types
**********************************************/

type ContentData = {
  type: string;
  data: string;
};

type InfoLinkData = {
  url: string;
  content: ContentData;
};

export type CategoryData = {
  name: string;
  links: InfoLinkData[];
};

type InfoLogoData = {
  url: string;
  content: ContentData;
};

export type InfoData = {
  logo: InfoLogoData;
  texts: string[];
  developer: InfoLogoData;
};

export type SecondaryInfoData = {
  categories: CategoryData[];
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
  clients: ClientsData;
  secondaryInfo: SecondaryInfoData;
};

/*********************************************/
