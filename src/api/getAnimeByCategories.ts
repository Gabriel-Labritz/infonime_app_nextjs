export const getAnimesCategories = async (path: string) => {
  const url = `http://127.0.0.1:1337/api/animes?${path}`;

  const res = await fetch(url);
  const animesDataJson = await res.json();

  return animesDataJson.data;
};
