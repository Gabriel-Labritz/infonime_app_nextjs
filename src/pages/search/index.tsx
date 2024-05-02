import { StrapiAnimeData } from '../../util-types/strapi-anime-data';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getAnimeBySearch } from '../../api/getAnimebySearch';
import SearchPageTemplate from '../../templates/SearchPageTemplate/SearchPageTemplate';
import Head from 'next/head';

export const getServerSideProps: GetServerSideProps<{
  animes: StrapiAnimeData[];
}> = async (context) => {
  const query = context.query.q || '';
  let animes: StrapiAnimeData[] | null = null;

  try {
    animes = await getAnimeBySearch(query as string);
  } catch (error) {
    animes = null;
  }

  if (!animes) {
    return { notFound: true };
  }

  return {
    props: { animes },
  };
};

export default function Teste({
  animes,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>InfoNime - Buscar Animes</title>
      </Head>
      <SearchPageTemplate data={animes} />
    </>
  );
}
