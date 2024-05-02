import { getAnimeBySlug } from '../../api/getAnimeBySlug';
import { GetStaticPaths, GetStaticProps } from 'next';
import { StrapiAnimeData } from '../../util-types/strapi-anime-data';
import AnimeTemplate from '../../templates/AnimeTemplate/AnimeTemplate';
import { getAllAnimes } from '../../api/getAllAnimes';
import { useRouter } from 'next/router';
import Loading from '../../components/Loading/Loading';

type AnimePageProps = {
  anime: StrapiAnimeData;
};

export default function Anime({ anime }: AnimePageProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  return (
    <>
      <AnimeTemplate data={anime} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const animes = await getAllAnimes();

  let paths = animes.map((anime) => {
    return {
      params: {
        slug: anime.slug,
      },
    };
  });

  if (!animes || !animes.length) {
    paths = [];
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<AnimePageProps> = async ({
  params,
}) => {
  let anime: StrapiAnimeData | null = null;

  try {
    anime = await getAnimeBySlug(params?.slug as string);
  } catch (error) {
    anime = null;
  }

  if (!anime) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      anime,
    },
    revalidate: 24 * 60 * 60,
  };
};
