import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { StrapiAnimeData } from '../../../util-types/strapi-anime-data';
import { getAnimesCategories } from '../../../api/getAnimeByCategories';
import CategoryTemplate from '../../../templates/CategoryTemplate/CategoryTemplate';

export const getStaticProps: GetStaticProps<{
  animes: StrapiAnimeData[];
}> = async () => {
  const path = `filters[categories][slug][$eqi]=shounen&populate=*`;
  let animes: StrapiAnimeData[] | null = null;

  try {
    animes = await getAnimesCategories(path);
  } catch (e) {
    animes = null;
  }

  if (!animes) {
    return { notFound: true };
  }

  return {
    props: {
      animes,
    },
  };
};

export default function Shounen({
  animes,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <CategoryTemplate
      data={animes}
      titlePage="Shounen"
      descriptionPage="Trabalho em equipe, o poder da amizade, a busca dos sonhos: o básico está todo aqui!"
    />
  );
}
