import { StrapiAnimeCategory } from '../../util-types/strapi-anime-category';
import * as Styled from './styles';

export type AnimeCategoriesMetaProps = {
  categories: StrapiAnimeCategory[];
};

export default function AnimeCategoriesMeta({
  categories,
}: AnimeCategoriesMetaProps) {
  return (
    <Styled.AnimeCategoriesContainer>
      {categories.map((category) => {
        return (
          <Styled.AnimeCategoriesContent key={category.id}>
            <small>{category.displayName}</small>
          </Styled.AnimeCategoriesContent>
        );
      })}
    </Styled.AnimeCategoriesContainer>
  );
}
