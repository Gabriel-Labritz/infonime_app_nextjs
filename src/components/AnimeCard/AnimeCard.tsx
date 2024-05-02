import { useEffect, useState } from 'react';
import { AppDispatch } from '../../app/store/store';
import { StrapiAnimeData } from '../../util-types/strapi-anime-data';
import { useDispatch } from 'react-redux';
import { removeAnimeList, setAnimeList } from '../../features/myList/listSlice';
import { FiPlay } from 'react-icons/fi';
import { LuBookmarkPlus } from 'react-icons/lu';
import { FaBookmark } from 'react-icons/fa6';
import { truncate } from '../../utils/truncate';
import Link from 'next/link';

import * as Styled from './styles';

export type AnimeCardProps = {
  data: StrapiAnimeData;
};

export function AnimeCard({ data }: AnimeCardProps) {
  const { id, title, slug, description, seasons, episodes, poster } = data;

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
    <Styled.Container>
      <Styled.ContentCard>
        <Styled.ImgCardContainer>
          <img src={poster.url} alt={title} />
        </Styled.ImgCardContainer>
        <Styled.BodyCard>
          <Styled.TitleCard>{title}</Styled.TitleCard>
          <Styled.SeasonsCardInfo>
            {seasons > 1 ? `${seasons} temporadas` : `${seasons} temporada`}
          </Styled.SeasonsCardInfo>
        </Styled.BodyCard>
      </Styled.ContentCard>

      <Styled.ContainerCardHover>
        <Styled.CardHoverContent>
          <Styled.CardHoverPosterWrapper href={`/anime/${slug}`}>
            <Styled.ContentImageHover>
              <Styled.ContentImageFigureHover>
                <img src={poster.url} alt={title} />
              </Styled.ContentImageFigureHover>
            </Styled.ContentImageHover>
          </Styled.CardHoverPosterWrapper>

          <Styled.CardHoverBody>
            <Link href={`/anime/${slug}`}>
              <Styled.TitleCardHover>{title}</Styled.TitleCardHover>
              <Styled.InfoCardMetaContainerHover>
                <Styled.CardHoverMeta>
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
                </Styled.CardHoverMeta>
              </Styled.InfoCardMetaContainerHover>
              <Styled.DescriptionCardHover>
                {truncate(description, 200)}
              </Styled.DescriptionCardHover>
            </Link>
          </Styled.CardHoverBody>
          <Styled.CardHoverFooter>
            <Styled.CardHoverFooterIcon>
              <div>
                <Link href={`/anime/${slug}`}>
                  <button title="Ver detalhes">
                    <FiPlay size={25} />
                  </button>
                </Link>
              </div>
            </Styled.CardHoverFooterIcon>
            {animeOnList === true ? (
              <Styled.CardHoverFooterIcon>
                <div>
                  <button
                    title="Remover da lista"
                    onClick={handleRemoveAnimeList}
                  >
                    <FaBookmark size={21} />
                  </button>
                </div>
              </Styled.CardHoverFooterIcon>
            ) : (
              <Styled.CardHoverFooterIcon>
                <div>
                  <button
                    title="Adicionar à lista"
                    onClick={handleAddAnimeList}
                  >
                    <LuBookmarkPlus size={25} />
                  </button>
                </div>
              </Styled.CardHoverFooterIcon>
            )}
          </Styled.CardHoverFooter>
        </Styled.CardHoverContent>
      </Styled.ContainerCardHover>
    </Styled.Container>
  );
}
