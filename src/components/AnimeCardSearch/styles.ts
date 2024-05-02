import styled, { css } from 'styled-components';

// Hover Styles
export const AnimeCardSearchHover = styled.div`
  display: none;
  transition: opacity 250ms ease;
`;

export const AnimeCardSearchHoverContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 100%;
  position: relative;
  background: #141519;
  border-color: 0 0 0 0.5rem #141519;
  padding: 10px;
  cursor: pointer;
`;

export const AnimeCardSearchHoverBody = styled.div`
  ${({ theme }) => css`
    position: relative;
    flex: 1;
    padding: 0.25rem;
    z-index: 2;

    a {
      text-decoration: none;
      color: ${theme.colors.white};
    }
  `}
`;

export const AnimeTitleCardSearchHover = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    margin-bottom: 0.75rem;
    overflow: hidden;
    white-space: unset;
  `}
`;

export const AnimeInfoCardSearchMetaContainer = styled.div`
  margin-bottom: 0.5rem;
  color: #a0a0a0;
`;

export const AnimeCardSearchMetaContent = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 1.8rem;
  }
`;

export const AnimeCardSearchDescriptionHover = styled.h4`
  ${({ theme }) => css`
    max-height: calc(6 * 1.8rem);
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 1.8rem;
    color: ${theme.colors.white};
    overflow: hidden;
    overflow-wrap: break-word;
    white-space: unset;
    word-break: break-all;
  `}
`;

export const AnimeCardSearchFooterHover = styled.div`
  display: flex;
  align-self: flex-start;
  flex-direction: row;
  position: relative;
  z-index: 3;
`;

export const AnimeCardSearchFooterIcon = styled.div`
  ${({ theme }) => css`
    margin-right: 0.375rem;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 4rem;
      width: 4rem;
      background-color: transparent;
      color: ${theme.colors.secondaryColor};
      /* color: #f47521; */
      border: none;
      cursor: pointer;
    }
  `}
`;

// CardSearch Styles
export const AnimeCardSearchContainer = styled.div`
  position: relative;
  height: 262px;
  width: 249px;
  padding: 0.6rem;
  transition: all 250ms ease-in-out 0s;

  a {
    text-decoration: none;
  }

  &:hover ${AnimeCardSearchHover} {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
`;

export const AnimeCardSearchContent = styled.div`
  height: 100%;
  width: 100%;
`;

export const AnimeCardSearchImgContent = styled.div`
  height: 135px;
  width: 100%;

  img {
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const AnimeCardSearchBodyContent = styled.div`
  margin: 10px 0px;
`;

export const AnimeCardSearchBottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;
`;

export const AnimeCardSearchTitle = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: 600;
    line-height: 2.25rem;
    padding-bottom: 0.5rem;

    a {
      text-decoration: none;
      color: ${theme.colors.white};

      &:hover {
        text-decoration: underline;
      }
    }
  `}
`;

export const AnimeCardSearchSeasonsMeta = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: ${theme.font.sizes.small};
    font-weight: 600;
    color: #a0a0a0;

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
