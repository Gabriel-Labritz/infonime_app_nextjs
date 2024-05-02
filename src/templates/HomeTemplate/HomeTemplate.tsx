import { Header } from '../../components/Header/Header';
import { AnimeBanner } from '../../components/AnimeBanner/AnimeBanner';
import { AnimeRow } from '../../components/AnimeRow/AnimeRow';
import { AnimeTrendingCard } from '../../components/AnimeTrendingCard/AnimeTrendingCard';
import { categories, secondaryCategories } from '../../api/categories';
import { StrapiAnimeData } from '../../util-types/strapi-anime-data';
import Footer from '../../components/Footer/Footer';
import CategoriesViews from '../../components/CategoriesViews/CategoriesViews';

import * as Styled from './styles';

export type HomeTemplateProps = {
  data: StrapiAnimeData[];
};

export default function HomeTemplate({ data }: HomeTemplateProps) {
  return (
    <>
      <Styled.Wrapper>
        <Header />
        <AnimeBanner data={data} />
        <CategoriesViews />
        {categories.map((category) => {
          return (
            <AnimeRow
              key={category.slug}
              title={category.displayName}
              path={category.path}
            />
          );
        })}

        <Styled.AnimeTrendingArea>
          <AnimeTrendingCard data={data} />
          <AnimeTrendingCard data={data} />
        </Styled.AnimeTrendingArea>

        {secondaryCategories.map((category) => {
          return (
            <AnimeRow
              key={category.slug}
              title={category.displayName}
              path={category.path}
            />
          );
        })}
        <Footer />
      </Styled.Wrapper>
    </>
  );
}
