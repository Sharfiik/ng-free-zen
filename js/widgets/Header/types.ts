type LangsData = {
  key: string;
  name: string;
};

type NavigationData = {
  key: string;
  name: string;
};

export type HeaderData = {
  langs: LangsData[];
  navigation: NavigationData[];
};
