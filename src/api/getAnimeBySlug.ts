import { StrapiAnimeData } from '../util-types/strapi-anime-data';

export const getAnimeBySlug = async (
  slug: string,
): Promise<StrapiAnimeData> => {
  const url = `http://127.0.0.1:1337/api/animes?&filters[slug][$eq]=${slug}&populate=*`;

  const animeData = await fetch(url);
  const animeDataJson = await animeData.json();

  return animeDataJson.data;
};
