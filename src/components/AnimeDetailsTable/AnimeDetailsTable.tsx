import { StrapiAnimeData } from '../../util-types/strapi-anime-data';
import * as Styled from './styles';

export type AnimeDetailTableProps = {
  data: StrapiAnimeData;
};

export default function AnimeDetailsTable({ data }: AnimeDetailTableProps) {
  const { distributor, audio: audios, content_classifications } = data[0];

  return (
    <Styled.AnimeDetailsTable>
      <Styled.AnimeDetailsTableRow>
        <Styled.AnimeRowContent>
          <h5>Distribuidora</h5>
        </Styled.AnimeRowContent>

        <Styled.AnimeRowContent>
          <h5>{distributor.displayName}</h5>
        </Styled.AnimeRowContent>
      </Styled.AnimeDetailsTableRow>

      <Styled.AnimeDetailsTableRow>
        <Styled.AnimeRowContent>
          <h5>Áudio</h5>
        </Styled.AnimeRowContent>

        <Styled.AnimeRowContent>
          {audios.map((audio) => {
            return <h5 key={audio.id}>{`${audio.displayName}`}</h5>;
          })}
        </Styled.AnimeRowContent>
      </Styled.AnimeDetailsTableRow>

      <Styled.AnimeDetailsTableRow>
        <Styled.AnimeRowContent>
          <h5>Classificação de Conteúdo</h5>
        </Styled.AnimeRowContent>

        <Styled.AnimeRowContent>
          {content_classifications.map((content_classification) => {
            return (
              <h5 key={content_classification.id} style={{ color: 'white' }}>
                {content_classification.displayName}
              </h5>
            );
          })}
        </Styled.AnimeRowContent>
      </Styled.AnimeDetailsTableRow>
    </Styled.AnimeDetailsTable>
  );
}
