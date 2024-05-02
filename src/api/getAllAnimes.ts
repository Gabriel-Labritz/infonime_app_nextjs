import { StrapiAnimeData } from '../util-types/strapi-anime-data';

export const getAllAnimes = async (): Promise<StrapiAnimeData[]> => {
  const url = `http://127.0.0.1:1337/api/animes?pagination[limit]=50&populate=*`;

  const res = await fetch(url);
  const animesData = await res.json();

  return animesData.data;
};
