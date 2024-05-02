import { GetStaticProps, InferGetServerSidePropsType } from 'next';
import HomeTemplate from '../templates/HomeTemplate/HomeTemplate';
import { StrapiAnimeData } from '../util-types/strapi-anime-data';
import { getAllAnimes } from '../api/getAllAnimes';
import Head from 'next/head';

export const getStaticProps: GetStaticProps<{
  animes: StrapiAnimeData[];
}> = async () => {
  let animes: StrapiAnimeData[] | null = null;

  try {
    animes = await getAllAnimes();
  } catch (error) {
    animes = null;
  }

  if (!animes) {
    return { notFound: true };
  }

  return {
    props: { animes },
    revalidate: 24 * 60 * 60,
  };
};

export default function Home({
  animes,
}: InferGetServerSidePropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>InfoNime - Informações sobre animes</title>
      </Head>
      <HomeTemplate data={animes} />
    </>
  );
}
