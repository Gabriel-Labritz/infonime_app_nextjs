import { StrapiAnimeImage } from './strapi-anime-image';

export type StrapiAnimeBanner = {
  id: number;
  title: string;
  slug: string;
  description: string;
  seasons: number;
  backdrop: StrapiAnimeImage;
  animeLogo: StrapiAnimeImage;
};
