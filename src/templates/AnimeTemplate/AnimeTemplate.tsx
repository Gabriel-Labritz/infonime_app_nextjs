// components
import { Header } from '../../components/Header/Header';
import AnimeBannerBackground from '../../components/AnimeBannerBackground/AnimeBannerBackground';
import AnimeCategoriesMeta from '../../components/AnimeCategoriesMeta/AnimeCategoriesMeta';
import AnimeDetailsTable from '../../components/AnimeDetailsTable/AnimeDetailsTable';
import Comments from '../../components/Comments/Comments';
import { LuBookmarkPlus } from 'react-icons/lu';

import { useDispatch } from 'react-redux';
import { setAnimeList, removeAnimeList } from '../../features/myList/listSlice';

// types
import { StrapiAnimeData } from '../../util-types/strapi-anime-data';
import { AppDispatch } from '../../app/store/store';

//styles
import * as Styled from './styles';
import { useEffect, useState } from 'react';
import { GoTrash } from 'react-icons/go';

export type AnimeTemplateProps = {
  data: StrapiAnimeData;
};

export default function AnimeTemplate({ data }: AnimeTemplateProps) {
  const {
    id,
    title,
    slug,
    backdrop,
    seasons,
    episodes,
    poster,
    description,
    categories,
    allowComments,
  } = data[0];

  const [animeOnList, setAnimeOnList] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const handleAddAnimeList = () => {
    dispatch(setAnimeList(data[0]));
  };

  const handleRemoveAnimeList = () => {
    dispatch(removeAnimeList(data[0]));
  };

  const animesOnList = (_id) => {
    const getList = localStorage.getItem('myAnimeList');
    if (getList === null) return undefined;
    const myList = JSON.parse(getList);

    const onList = myList.map((anime) => {
      return anime.id;
    });

    const animeIncludeOnList = onList.includes(_id);

    if (!animeIncludeOnList) return setAnimeOnList(false);

    setAnimeOnList(true);
  };

  useEffect(() => {
    animesOnList(id);
  }, [id]);

  return (
    <>
      <Header />
      <Styled.PageWrapper>
        <AnimeBannerBackground backdrop={backdrop} title={title} />

        <Styled.AnimeBodyArea>
          <Styled.AnimeBodyContent>
            <Styled.AnimeInfosArea>
              <Styled.AnimeTitle>{title}</Styled.AnimeTitle>

              <Styled.AnimesSeasonInfo>
                {seasons > 1 ? `${seasons} temporadas` : `${seasons} temporada`}{' '}
                |{' '}
                {episodes > 1
                  ? `${episodes} espisódios`
                  : `${episodes} episódio`}
              </Styled.AnimesSeasonInfo>

              {animeOnList === true ? (
                <Styled.ButtonRemoveList onClick={handleRemoveAnimeList}>
                  <GoTrash size={22} />
                  Remover da Lista
                </Styled.ButtonRemoveList>
              ) : (
                <Styled.ButtonAddList onClick={handleAddAnimeList}>
                  <LuBookmarkPlus size={22} />
                  Adicionar à Lista
                </Styled.ButtonAddList>
              )}

              <Styled.Description>
                <p>{description}</p>
              </Styled.Description>

              <AnimeCategoriesMeta categories={categories} />

              <AnimeDetailsTable data={data} />
            </Styled.AnimeInfosArea>

            <Styled.AnimePosterArea>
              <img src={poster.url} alt={title} />
            </Styled.AnimePosterArea>
          </Styled.AnimeBodyContent>

          <Comments
            id={id}
            title={title}
            slug={slug}
            allowComments={allowComments}
          />
        </Styled.AnimeBodyArea>
      </Styled.PageWrapper>
    </>
  );
}
