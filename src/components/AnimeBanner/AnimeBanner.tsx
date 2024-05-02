import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAnimeList, removeAnimeList } from '../../features/myList/listSlice';
import { StrapiAnimeData } from '../../util-types/strapi-anime-data';
import { FiPlay } from 'react-icons/fi';
import { LuBookmarkPlus } from 'react-icons/lu';
import { truncate } from '../../utils/truncate';
import Link from 'next/link';

import * as Styled from './styles';
import { FaBookmark } from 'react-icons/fa6';

export type AnimeBannerProps = {
  data: StrapiAnimeData[];
};

export function AnimeBanner({ data }: AnimeBannerProps) {
  const [animeOnList, setAnimeOnList] = useState(false);
  const dispatch = useDispatch();

  const randomAnime = Math.floor(Math.random() * data.length);

  const handleAddAnimeList = () => {
    dispatch(setAnimeList(data[randomAnime]));
  };

  const handleRemoveAnimeList = () => {
    dispatch(removeAnimeList(data[randomAnime]));
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
    animesOnList(data[randomAnime].id);
  }, [data, randomAnime]);

  return (
    <Styled.Container>
      <Styled.BackgroundContainer
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: `url(${data[randomAnime].backdrop.url})`,
        }}
      >
        <div className="horizontal-opacity">
          <div className="vertical-opacity">
            <Styled.BannerContent>
              <Styled.ImgTitle>
                <img
                  src={data[randomAnime].animeLogo.url}
                  alt={data[randomAnime].title}
                />
              </Styled.ImgTitle>

              <Styled.AnimeDescription>
                {truncate(data[randomAnime].description, 200)}
              </Styled.AnimeDescription>

              <Styled.AnimeSeasons>
                {data[randomAnime].seasons > 1
                  ? `${data[randomAnime].seasons} temporadas`
                  : `${data[randomAnime].seasons} temporada`}
              </Styled.AnimeSeasons>

              <Styled.ButtonAreaContainer>
                <Link href={`/anime/${data[randomAnime].slug}`}>
                  <button className="btn-watch">
                    <FiPlay size={22} />
                    Ver Detalhes
                  </button>
                </Link>

                {animeOnList === true ? (
                  <button
                    className="btn-add-list"
                    title="Remover da lista"
                    onClick={handleRemoveAnimeList}
                  >
                    <FaBookmark size={20} />
                  </button>
                ) : (
                  <button
                    className="btn-add-list"
                    title="Adicionar à lista"
                    onClick={handleAddAnimeList}
                  >
                    <LuBookmarkPlus size={22} />
                  </button>
                )}
              </Styled.ButtonAreaContainer>
            </Styled.BannerContent>
          </div>
        </div>
      </Styled.BackgroundContainer>
    </Styled.Container>
  );
}
