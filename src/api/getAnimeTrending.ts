export const getAnimesTrending = async (
  categoryTrending:
    | 'shounen'
    | 'romance'
    | 'acao'
    | 'aventura'
    | 'drama'
    | 'fantasia'
    | 'ficcao-cientifica'
    | 'suspense'
    | 'sobrenatural',
) => {
  try {
    const url = `http://localhost:1337/api/animes?filters[categories][slug][$eqi]=${categoryTrending}`;
    const animesData = await fetch(url);
    const animeDataJson = await animesData.json();

    console.log(animeDataJson.data);
    return animeDataJson.data;
  } catch (error) {
    console.log('error to get animes data', error);
  }
};
