import { GoClock } from 'react-icons/go';
import { FaExclamation } from 'react-icons/fa6';
import { TfiBag } from 'react-icons/tfi';
import * as Styled from './styles';

export function Login() {
  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.BackgroundImg src="/images/hero_bg@2x.png" alt="" />
        <Styled.WrapperText>
          <Styled.TitleWrapper>
            O Maior Catálogo de Anime do Mundo
          </Styled.TitleWrapper>
          <Styled.ButtonWrapper>Ver planos Premium</Styled.ButtonWrapper>
        </Styled.WrapperText>
        <Styled.BottomWrapper>
          <Styled.DisplayWrapper>
            <GoClock size={44} />
            <span>
              Assista a novos episódios uma hora após a exibição no Japão
            </span>
          </Styled.DisplayWrapper>
          <Styled.DisplayWrapper>
            <FaExclamation size={44} />
            <span>Desfrute de acesso ilimitado a animes, sem propaganda</span>
          </Styled.DisplayWrapper>
          <Styled.DisplayWrapper>
            <TfiBag size={44} />
            <span>Economize com descontos exclusivos na Loja Crunchyroll*</span>
          </Styled.DisplayWrapper>
        </Styled.BottomWrapper>
      </Styled.Content>
    </Styled.Container>
  );
}
