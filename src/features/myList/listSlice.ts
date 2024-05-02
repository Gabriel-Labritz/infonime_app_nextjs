import { createSlice } from '@reduxjs/toolkit';
import { StrapiAnimeData } from '../../util-types/strapi-anime-data';

type ListStateProps = {
  animes: StrapiAnimeData[];
};

const initialState: ListStateProps = {
  animes: [],
};

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    setAnimeList: (state, action) => {
      state.animes = [...state.animes, action.payload];
      const setListAnimes = new Set();

      const filterAnime = state.animes.filter((anime) => {
        const duplicatedAnime = setListAnimes.has(anime.id);
        setListAnimes.add(anime.id);
        return !duplicatedAnime;
      });

      const listData = JSON.stringify(filterAnime);
      localStorage.setItem('myAnimeList', listData);
    },
    removeAnimeList: (state, action) => {
      const animesStorage = localStorage.getItem('myAnimeList');
      const animesStorageJson = JSON.parse(animesStorage as string);

      const nextAnimesItens = animesStorageJson.filter((anime) => {
        return anime.id !== action.payload.id;
      });

      state.animes = nextAnimesItens;

      const listData = JSON.stringify(state.animes);
      localStorage.setItem('myAnimeList', listData);
    },
  },
});

export const { setAnimeList, removeAnimeList } = listSlice.actions;

export const selectAnimeList = (state) => state.list.animes;

export default listSlice.reducer;
