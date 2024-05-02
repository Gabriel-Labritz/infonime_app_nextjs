import styled, { css } from 'styled-components';

export const AnimeCardWatchListContainer = styled.div`
  height: 252px;
  width: 249px;
  padding: 0.6rem;
  transition: all 250ms ease-in-out 0s;

  a {
    text-decoration: none;
  }

  &:hover {
    background-color: #141519;
    cursor: pointer;
  }
`;

export const AnimeCardWatchListContent = styled.div`
  height: 100%;
  width: 100%;
`;

export const CardWatchListImgContent = styled.div`
  width: 100%;
  height: 135px;

  img {
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const CardWatchListBodyContent = styled.div`
  margin: 10px 0px;
`;

export const CardWatchListBottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;
`;

export const TitleCardWatchList = styled.h4`
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

export const CardWatchListSeasonsMeta = styled.div`
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

export const RemoveButton = styled.button`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    color: #a0a0a0;
    transition: all 300ms ease-in 0s;
    border: none;
    cursor: pointer;

    &:hover {
      color: ${theme.colors.white};
    }
  `}
`;
