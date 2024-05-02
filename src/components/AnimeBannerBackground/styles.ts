import styled, { css } from 'styled-components';

export const AnimeImgArea = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  overflow-x: hidden;
  position: relative;
`;

export const AnimeBackground = styled.img`
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: unset;
  opacity: 0.5;
  filter: blur(0.5375rem);
  z-index: -1;
`;

export const AnimeBackdrop = styled.img`
  ${({ theme }) => css`
    position: absolute;
    width: 420px;
    height: 40%;
    object-fit: cover;
    object-position: unset;
    z-index: 1;

    @media ${theme.media.lteMedium} {
      object-fit: contain;
    }
  `}
`;
