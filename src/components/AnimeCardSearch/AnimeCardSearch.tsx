import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../app/store/store';
import { useState, useEffect } from 'react';
import { setAnimeList, removeAnimeList } from '../../features/myList/listSlice';
import { StrapiAnimeData } from '../../util-types/strapi-anime-data';
import { truncate } from '../../utils/truncate';
import { FiPlay } from 'react-icons/fi';
import { LuBookmarkPlus } from 'react-icons/lu';
import { FaBookmark } from 'react-icons/fa6';

import * as Styled from './styles';

export type AnimeCardSearchProps = {
  data: StrapiAnimeData;
};

export default function AnimeCardSearch({ data }: AnimeCardSearchProps) {
  const { id, title, slug, backdrop, seasons, episodes, description } = data;

  const [animeOnList, setAnimeOnList] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const handleAddAnimeList = () => {
    dispatch(setAnimeList(data));
  };

  const handleRemoveAnimeList = () => {
    dispatch(removeAnimeList(data));
  };

  const animesOnList = (_id) => {
    const getList = localStorage.getItem('myAnimeList');
    if (getList === null) return undefined;
    const myList = JSON.parse(getList);

    const onList = myList.map((anime) => anime.id);

    const animeIncludeOnList = onList.includes(_id);

    if (!animeIncludeOnList) return setAnimeOnList(false);

    setAnimeOnList(true);
  };

  useEffect(() => {
    animesOnList(id);
  }, [id]);

  return (
    <Styled.AnimeCardSearchContainer>
      <Styled.AnimeCardSearchContent>
        <Styled.AnimeCardSearchImgContent>
          <img src={backdrop.url} alt={title} />
        </Styled.AnimeCardSearchImgContent>
        <Styled.AnimeCardSearchBodyContent>
          <Styled.AnimeCardSearchTitle>
            <Link href={`/anime/${slug}`}>{title}</Link>
          </Styled.AnimeCardSearchTitle>
          <Styled.AnimeCardSearchBottom>
            <Styled.AnimeCardSearchSeasonsMeta>
              {seasons > 1 ? `${seasons} temporadas` : `${seasons} temporada`}
            </Styled.AnimeCardSearchSeasonsMeta>
          </Styled.AnimeCardSearchBottom>
        </Styled.AnimeCardSearchBodyContent>
      </Styled.AnimeCardSearchContent>

      <Styled.AnimeCardSearchHover>
        <Styled.AnimeCardSearchHoverContent>
          <Styled.AnimeCardSearchHoverBody>
            <Link href={`/anime/${slug}`}>
              <Styled.AnimeCardSearchTitle>{title}</Styled.AnimeCardSearchTitle>
              <Styled.AnimeInfoCardSearchMetaContainer>
                <Styled.AnimeCardSearchMetaContent>
                  <span>
                    {seasons > 1
                      ? `${seasons} temporadas`
                      : `${seasons} temporada`}
                  </span>
                  <span>
                    {episodes > 1
                      ? `${episodes} episódios`
                      : `${episodes} episódio`}
                  </span>
                </Styled.AnimeCardSearchMetaContent>
              </Styled.AnimeInfoCardSearchMetaContainer>
              <Styled.AnimeCardSearchDescriptionHover>
                {truncate(description, 200)}
              </Styled.AnimeCardSearchDescriptionHover>
            </Link>
          </Styled.AnimeCardSearchHoverBody>

          <Styled.AnimeCardSearchFooterHover>
            <Styled.AnimeCardSearchFooterIcon>
              <div>
                <button title="Começar à assistir">
                  <FiPlay size={25} />
                </button>
              </div>
            </Styled.AnimeCardSearchFooterIcon>
            <Styled.AnimeCardSearchFooterIcon>
              {animeOnList === true ? (
                <div>
                  <button
                    title="Remover da lista"
                    onClick={handleRemoveAnimeList}
                  >
                    <FaBookmark size={21} />
                  </button>
                </div>
              ) : (
                <div>
                  <button
                    title="Adicionar à lista"
                    onClick={handleAddAnimeList}
                  >
                    <LuBookmarkPlus size={25} />
                  </button>
                </div>
              )}
            </Styled.AnimeCardSearchFooterIcon>
          </Styled.AnimeCardSearchFooterHover>
        </Styled.AnimeCardSearchHoverContent>
      </Styled.AnimeCardSearchHover>
    </Styled.AnimeCardSearchContainer>
  );
}
