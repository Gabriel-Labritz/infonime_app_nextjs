import { StrapiAnimeData } from '../../util-types/strapi-anime-data';
import { AppDispatch } from '../../app/store/store';
import { useDispatch } from 'react-redux';
import { removeAnimeList } from '../../features/myList/listSlice';
import { toast } from 'sonner';
import { GoTrash } from 'react-icons/go';
import NextToast from '../NextToast/NextToast';
import Link from 'next/link';

import * as Styled from './styles';

export type AnimeCardWatchListProps = {
  data: StrapiAnimeData;
};

export function AnimeCardWatchList({ data }: AnimeCardWatchListProps) {
  const { slug, title, backdrop, seasons } = data;
  const dispatch = useDispatch<AppDispatch>();

  const handleRemoveAnimeList = () => {
    dispatch(removeAnimeList(data));
    toast.success(`${title} foi removido da sua lista!`);
  };

  return (
    <Styled.AnimeCardWatchListContainer>
      <Styled.AnimeCardWatchListContent>
        <Styled.CardWatchListImgContent>
          <img src={backdrop.url} alt={title} />
        </Styled.CardWatchListImgContent>

        <Styled.CardWatchListBodyContent>
          <Styled.TitleCardWatchList>
            <Link href={`/anime/${slug}`}>{title}</Link>
          </Styled.TitleCardWatchList>

          <Styled.CardWatchListBottom>
            <Styled.CardWatchListSeasonsMeta>
              {seasons > 1 ? `${seasons} temporadas` : `${seasons} temporada`}
            </Styled.CardWatchListSeasonsMeta>

            <Styled.RemoveButton title="Remover da sua lista">
              <GoTrash size={22} onClick={() => handleRemoveAnimeList()} />
            </Styled.RemoveButton>
          </Styled.CardWatchListBottom>
        </Styled.CardWatchListBodyContent>
        <NextToast />
      </Styled.AnimeCardWatchListContent>
    </Styled.AnimeCardWatchListContainer>
  );
}
