import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { Header } from '../../components/Header/Header';
import { FaRegSadCry } from 'react-icons/fa';
import { StrapiAnimeData } from '../../util-types/strapi-anime-data';
import AnimeCardSearch from '../../components/AnimeCardSearch/AnimeCardSearch';

import * as Styled from './styles';
import Footer from '../../components/Footer/Footer';

export type SearchPageTemplateProps = {
  data: StrapiAnimeData[];
};

export default function SearchPageTemplate({ data }: SearchPageTemplateProps) {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState(router.query.q || '');
  const inputTimeOut = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    clearTimeout(inputTimeOut.current);
    if (router?.query?.q === searchValue) return;

    const q = searchValue;

    if (!q || q.length < 3) return;

    inputTimeOut.current = setTimeout(() => {
      router.push({ pathname: '/search/', query: { q: searchValue } });
    }, 800);

    return () => clearTimeout(inputTimeOut.current);
  }, [router, searchValue]);

  return (
    <>
      <Header />
      <Styled.Container>
        <Styled.SearchArea>
          <Styled.SearchField>
            <Styled.SearchContainer>
              <Styled.SearchInputContainer>
                <input
                  type="search"
                  placeholder="Buscar..."
                  name="q"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </Styled.SearchInputContainer>
            </Styled.SearchContainer>
          </Styled.SearchField>
        </Styled.SearchArea>

        <Styled.HeaderContentSearch>
          <Styled.TitleContentSearch>
            <Styled.TitleHeaderContentSearch>
              Melhores resultados
            </Styled.TitleHeaderContentSearch>
          </Styled.TitleContentSearch>
        </Styled.HeaderContentSearch>

        {data.length > 0 ? (
          <Styled.ListSearchArea>
            {data.map((anime) => {
              return (
                <Styled.ListSearchGrid key={anime.id}>
                  <AnimeCardSearch data={anime} />
                </Styled.ListSearchGrid>
              );
            })}
          </Styled.ListSearchArea>
        ) : (
          <Styled.SearchNotFoundArea>
            <Styled.SearchNotFoundContent>
              <Styled.SearchNotFoundTitle>
                Sua Busca não foi encontrada <FaRegSadCry size={45} />
              </Styled.SearchNotFoundTitle>
            </Styled.SearchNotFoundContent>
          </Styled.SearchNotFoundArea>
        )}
      </Styled.Container>
      <Footer />
    </>
  );
}
