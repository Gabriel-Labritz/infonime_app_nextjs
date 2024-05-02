import { StrapiAnimeAudio } from './strapi-anime-audio';
import { StrapiAnimeCategory } from './strapi-anime-category';
import { StrapiAnimeDistributor } from './strapi-anime-distributor';
import { StrapiAnimeImage } from './strapi-anime-image';

export type StrapiAnimeData = {
  id: number;
  title: string;
  slug: string;
  description: string;
  seasons: number;
  episodes: number;
  poster: StrapiAnimeImage;
  allowComments: boolean;
  backdrop: StrapiAnimeImage;
  categories: StrapiAnimeCategory[];
  distributor: StrapiAnimeDistributor;
  audio: StrapiAnimeAudio[];
  animeLogo: StrapiAnimeImage;
};
