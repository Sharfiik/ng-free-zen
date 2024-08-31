import { TitleData } from '../../ui/Title/types.ts';
import { LinkData } from '../../ui/Link/types.ts';
import { ImageData } from '../../ui/Images/types.ts';

export type DownloadData = {
  title: TitleData;
  texts: string[];
  links: LinkData[];
  image: ImageData;
};
