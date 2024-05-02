import styled, { css } from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
  top: 60px;
  overflow-x: hidden;
`;

export const BackgroundContainer = styled.header`
  ${({ theme }) => css`
    height: 100%;
    object-fit: cover;

    @media ${theme.media.lteMedium} {
      width: initial;
    }

    .horizontal-opacity {
      width: inherit;
      height: inherit;
      background: linear-gradient(to top, #000000 10%, transparent 90%);
    }

    .vertical-opacity {
      width: inherit;
      height: inherit;
      background: linear-gradient(to right, #000000 10%, transparent 90%);
    }
  `}
`;

export const BannerContent = styled.div`
  ${({ theme }) => css`
    /* border: 1px solid red; */
    color: white;
    padding: 0px 60px;

    @media ${theme.media.lteMedium} {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      top: 25%;
      text-align: center;
    }
  `}
`;

export const ImgTitle = styled.div`
  ${({ theme }) => css`
    display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
    align-items: flex-end;
    height: 20vw;
    min-height: 170px;
    width: 100%;

    img {
      display: block;
      width: 20vw;
      max-width: 608px;
      min-width: 200px;
      object-fit: contain;
    }

    @media ${theme.media.lteMedium} {
      justify-content: center;
    }
  `}
`;

export const AnimeDescription = styled.p`
  ${({ theme }) => css`
    width: 400px;
    font-size: calc(${theme.font.sizes.small} - 1px);
    line-height: 2.5rem;
    font-weight: 600;
    color: ${theme.colors.mediumGray};
    margin: 20px 0px;

    @media ${theme.media.lteMedium} {
      display: none;
    }
  `}
`;

export const AnimeSeasons = styled.span`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: calc(${theme.font.sizes.small} - 2px);
    font-weight: 600;
    color: #a0a0a0;

    &::before {
      content: '';
      display: inline-block;
      height: 0.35rem;
      width: 0.35rem;
      background-color: #a0a0a0;
      line-height: 1;
      transform: rotate(45deg);
    }

    @media ${theme.media.lteMedium} {
      margin-top: 5px;
    }
  `}
`;

export const ButtonAreaContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 0.8rem;
    margin-top: 20px;

    .btn-watch {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 25rem;
      padding: 0.7rem;

      background-color: ${theme.colors.secondaryColor};
      transition: all 400ms ease-in-out 0s;
      font-size: 1.4rem;
      font-weight: bold;
      text-transform: uppercase;
      border: none;
      cursor: pointer;
    }

    .btn-watch:hover {
      filter: brightness(110%);
    }

    .btn-add-list {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 4rem;
      background-color: transparent;
      color: ${theme.colors.secondaryColor};
      border: 2px solid ${theme.colors.secondaryColor};

      cursor: pointer;
    }

    .btn-add-list:hover {
      filter: brightness(110%);
    }

    @media ${theme.media.lteMedium} {
      .btn-watch {
        width: 30rem;
      }
    }
  `}
`;
