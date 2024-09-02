type Source = {
  lightSource: string;
  darkSource: string;
};

type Client = {
  name: string;
  logo: Source;
};

export type ClientsData = {
  brands: Client[];
};
