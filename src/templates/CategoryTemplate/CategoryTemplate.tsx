import { Header } from '../../components/Header/Header';
import { StrapiAnimeData } from '../../util-types/strapi-anime-data';
import { AnimeCard } from '../../components/AnimeCard/AnimeCard';
import Footer from '../../components/Footer/Footer';

import * as Styled from './styles';

export type CategoryTemplateProps = {
  data: StrapiAnimeData[];
  titlePage: string;
  descriptionPage: string;
};

export default function CategoryTemplate({
  data,
  titlePage,
  descriptionPage,
}: CategoryTemplateProps) {
  return (
    <>
      <Header />
      <Styled.Container>
        <Styled.HeaderContainerCategory>
          <Styled.HeaderContentCategory>
            <Styled.TitleHeaderContentCategory>
              {titlePage}
            </Styled.TitleHeaderContentCategory>
          </Styled.HeaderContentCategory>
        </Styled.HeaderContainerCategory>

        <Styled.DescriptionHeaderCategory>
          {descriptionPage}
        </Styled.DescriptionHeaderCategory>

        <Styled.CategoryListArea>
          {data.map((anime) => {
            return (
              <Styled.ListGrid key={anime.id}>
                <AnimeCard data={anime} />
              </Styled.ListGrid>
            );
          })}
        </Styled.CategoryListArea>
      </Styled.Container>
      <Footer />
    </>
  );
}
