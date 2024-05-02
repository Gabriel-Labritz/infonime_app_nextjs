import { StrapiAnimeData } from '../util-types/strapi-anime-data';

export const getAnimeBySearch = async (
  query: string,
): Promise<StrapiAnimeData[]> => {
  const url = `http://127.0.0.1:1337/api/animes?filters[title][$containsi]=${query}%&populate=*`;

  const res = await fetch(url);
  const animeData = await res.json();

  return animeData.data;
};
