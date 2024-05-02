import styled, { css } from 'styled-components';

export const AnimeTrendingCardContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 100%;
    padding-left: 6rem;
    padding-right: 6rem;
    color: ${theme.colors.white};
    margin-bottom: 5rem;

    @media ${theme.media.lteMedium} {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  `}
`;

export const AnimeTrendingCardContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 2.75rem;
    position: relative;
    width: 100%;
    height: 100%;

    @media ${theme.media.lteMedium} {
      display: block;
    }
  `}
`;

export const ImgWrapper = styled.div`
  flex: 0 0 45%;
  position: relative;
`;

export const AnimeTrendingImgHover = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #0009;
    color: #ffffff;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    transition: opacity 0.3s ease-in-out 0s;
    opacity: 0;
    z-index: 1;
    cursor: pointer;

    span {
      font-size: ${theme.font.sizes.small};
      font-weight: 600;
      line-height: 2rem;
    }

    &:hover {
      opacity: 1;
    }
  `}
`;

export const AnimeTrendingCardImgContainer = styled.div`
  ${({ theme }) => css`
    img {
      width: 100%;
      object-fit: cover;

      @media ${theme.media.lteMedium} {
        display: block;
      }
    }
  `}
`;

export const AnimeTrendingCardBody = styled.div``;

export const AnimeTitle = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: 600;
    line-height: 2.25rem;
    padding-bottom: 1rem;

    a {
      text-decoration: none;
      color: ${theme.colors.white};

      &:hover {
        text-decoration: underline;
      }
    }

    @media ${theme.media.lteMedium} {
      font-size: calc(${theme.font.sizes.medium} - 4px);
      margin-top: 1rem;
    }
  `}
`;

export const AnimeSeasonsMeta = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: calc(${theme.font.sizes.small} -2px);
    font-weight: 600;
    color: #a0a0a0;
    padding-bottom: 1rem;

    &::before {
      content: '';
      height: 0.35rem;
      width: 0.35rem;
      background-color: #a0a0a0;
      line-height: 1;
      transform: rotate(45deg);
    }
  `}
`;

export const AnimeDescription = styled.p`
  ${({ theme }) => css`
    font-size: calc(${theme.font.sizes.small} - 1px);
    line-height: 2rem;
    font-weight: 600;
    overflow-wrap: break-word;
    padding-bottom: 2rem;

    @media ${theme.media.lteMedium} {
      font-size: calc(${theme.font.sizes.small} - 2px);
      padding-bottom: 1rem;
    }
  `}
`;

export const ButtonAreaContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 0.8rem;

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
      padding: 0.7rem;
      font-size: 1.4rem;
      font-weight: bold;
      text-transform: uppercase;
      background-color: transparent;
      color: ${theme.colors.secondaryColor};
      border: 2px solid ${theme.colors.secondaryColor};
      cursor: pointer;
    }

    .btn-add-list:hover {
      filter: brightness(110%);
    }

    .btn-remove-list {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.7rem;
      background-color: ${theme.colors.secondaryColor};
      transition: all 400ms ease-in-out 0s;
      font-size: 1.4rem;
      font-weight: bold;
      text-transform: uppercase;
      border: none;
      cursor: pointer;
    }

    .btn-remove-list:hover {
      filter: brightness(110%);
    }

    @media ${theme.media.lteMedium} {
      .btn-watch {
        display: none;
      }

      .btn-add-list {
        width: 100%;
      }

      .btn-remove-list {
        width: 100%;
      }
    }
  `}
`;
