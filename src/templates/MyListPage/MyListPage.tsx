import { useEffect, useState } from 'react';
import { Header } from '../../components/Header/Header';
import { StrapiAnimeData } from '../../util-types/strapi-anime-data';
import { LuBookmarkPlus } from 'react-icons/lu';
import { AnimeCardWatchList } from '../../components/AnimeCardWatchList/AnimeCardWatchList';

import * as Styled from './styles';
import Footer from '../../components/Footer/Footer';

export function MyListPage() {
  const [myList, setMyList] = useState([]);

  const getMyAnimeList = () => {
    try {
      const getList = localStorage.getItem('myAnimeList');
      if (!getList) return undefined;
      return setMyList(JSON.parse(getList));
    } catch (error) {
      return undefined;
    }
  };

  useEffect(() => {
    getMyAnimeList();
  }, []);

  return (
    <>
      <Header />
      <Styled.Container>
        <Styled.HeaderContent>
          <Styled.TitleContent>
            <LuBookmarkPlus size={24} />
            <Styled.TitleHeaderContent>Sua lista !</Styled.TitleHeaderContent>
          </Styled.TitleContent>
        </Styled.HeaderContent>
        {myList && (
          <Styled.ListArea>
            {myList.map((anime: StrapiAnimeData) => {
              return (
                <Styled.ListGrid key={`anime_key_${anime.id}`}>
                  <AnimeCardWatchList data={anime} />
                </Styled.ListGrid>
              );
            })}
          </Styled.ListArea>
        )}
      </Styled.Container>
      <Footer />
    </>
  );
}
