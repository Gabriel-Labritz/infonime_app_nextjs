import { useState, useEffect } from 'react';
import { StrapiAnimeData } from '../../util-types/strapi-anime-data';
import { getAnimesCategories } from '../../api/getAnimeByCategories';
import { AnimeCard } from '../AnimeCard/AnimeCard';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { MdKeyboardArrowRight } from 'react-icons/md';
import * as Styled from './styles';

export type AnimeRowTesteProps = {
  title: string;
  path: string;
};

export function AnimeRow({ title, path }: AnimeRowTesteProps) {
  const [animes, setAnimes] = useState([]);
  const [scrollX, setScrollX] = useState(0);
  const [windowWidthMobile, setWindowWidthMobile] = useState(0);
  const [windowWidthDesktop, setWindowWidthDesktop] = useState(0);

  const handleRowLeft = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);

    if (x > 0) {
      x = 0;
    }

    setScrollX(x);
  };

  const handleRowRight = () => {
    let x = scrollX - Math.floor(window.innerWidth / 2);
    const listAnimeWidth = animes.length * 240;

    if (window.innerWidth - listAnimeWidth > x) {
      x = window.innerWidth - listAnimeWidth - 320;
    }

    setScrollX(x);
  };

  const handleWindowWidthPage = () => {
    if (window.innerWidth <= 768) {
      setWindowWidthMobile(window.innerWidth * 200);
    }

    setWindowWidthDesktop(window.innerWidth * 240);
  };

  const getAnimeByCategory = async (_path: string) => {
    try {
      const data = await getAnimesCategories(_path);
      setAnimes(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAnimeByCategory(path);
    handleWindowWidthPage();
  }, [path]);

  return (
    <Styled.ContainerRow>
      <Styled.RowHeader>
        <Styled.TitleRow>{title}</Styled.TitleRow>
      </Styled.RowHeader>
      <Styled.RowListContainer>
        <div
          className="arrow-left"
          title="Anterior"
          aria-label="Anterior"
          onClick={handleRowLeft}
        >
          <MdKeyboardArrowLeft size={44} />
        </div>
        <div
          className="arrow-right"
          title="Próximo"
          aria-label="Próximo"
          onClick={handleRowRight}
        >
          <MdKeyboardArrowRight size={44} />
        </div>
        <Styled.RowAnimeListContent
          style={{
            marginLeft: scrollX,
          }}
        >
          {animes.map((anime: StrapiAnimeData) => {
            return (
              <Styled.RowAnimeListItem key={`anime_row_id${anime.id}`}>
                <AnimeCard data={anime} />
              </Styled.RowAnimeListItem>
            );
          })}
        </Styled.RowAnimeListContent>
      </Styled.RowListContainer>
    </Styled.ContainerRow>
  );
}
