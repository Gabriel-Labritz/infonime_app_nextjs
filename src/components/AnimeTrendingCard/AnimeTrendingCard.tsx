import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeAnimeList, setAnimeList } from '../../features/myList/listSlice';
import { StrapiAnimeData } from '../../util-types/strapi-anime-data';
import { truncate } from '../../utils/truncate';
import { FiPlay } from 'react-icons/fi';
import { LuBookmarkPlus } from 'react-icons/lu';
import { GoTrash } from 'react-icons/go';
import Link from 'next/link';

import * as Styled from './styles';

export type AnimeTrendingCardProps = {
  data: StrapiAnimeData[];
};

export function AnimeTrendingCard({ data }: AnimeTrendingCardProps) {
  const [animeOnList, setAnimeOnList] = useState(false);
  const dispatch = useDispatch();

  const randomAnimeTrending = Math.floor(Math.random() * data.length);

  const handleAddAnimeList = () => {
    dispatch(setAnimeList(data[randomAnimeTrending]));
  };

  const handleRemoveAnimeList = () => {
    dispatch(removeAnimeList(data[randomAnimeTrending]));
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
    animesOnList(data[randomAnimeTrending].id);
  }, [data, randomAnimeTrending]);

  return (
    <Styled.AnimeTrendingCardContainer>
      <Styled.AnimeTrendingCardContent>
        <Styled.ImgWrapper>
          <Link href={`/anime/${data[randomAnimeTrending].slug}`}>
            <Styled.AnimeTrendingImgHover>
              <span>Ver Série</span>
            </Styled.AnimeTrendingImgHover>
          </Link>

          <Styled.AnimeTrendingCardImgContainer>
            <img
              src={data[randomAnimeTrending].backdrop.url}
              alt={data[randomAnimeTrending].title}
            />
          </Styled.AnimeTrendingCardImgContainer>
        </Styled.ImgWrapper>

        <Styled.AnimeTrendingCardBody>
          <Styled.AnimeTitle>
            <Link href={`/anime/${data[randomAnimeTrending].slug}`}>
              {data[randomAnimeTrending].title}
            </Link>
          </Styled.AnimeTitle>

          <Styled.AnimeSeasonsMeta>
            <span>
              {data[randomAnimeTrending].seasons > 1
                ? `${data[randomAnimeTrending].seasons} temporadas`
                : `${data[randomAnimeTrending].seasons} temporada`}
            </span>
          </Styled.AnimeSeasonsMeta>

          <Styled.AnimeDescription>
            {truncate(data[randomAnimeTrending].description, 200)}
          </Styled.AnimeDescription>

          <Styled.ButtonAreaContainer>
            <button className="btn-watch">
              <FiPlay size={22} />
              Começar a assistir
            </button>
            {animeOnList === true ? (
              <button
                className="btn-remove-list"
                title="Remover da sua lista"
                onClick={handleRemoveAnimeList}
              >
                <GoTrash size={22} />
                Remover da lista
              </button>
            ) : (
              <button
                className="btn-add-list"
                title="Adicionar à lista"
                onClick={handleAddAnimeList}
              >
                <LuBookmarkPlus size={22} />
                Adicionar à Lista
              </button>
            )}
          </Styled.ButtonAreaContainer>
        </Styled.AnimeTrendingCardBody>
      </Styled.AnimeTrendingCardContent>
    </Styled.AnimeTrendingCardContainer>
  );
}
