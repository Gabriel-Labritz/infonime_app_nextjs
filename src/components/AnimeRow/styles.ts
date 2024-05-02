import styled, { css } from 'styled-components';

export const ContainerRow = styled.div`
  ${({ theme }) => css`
    position: relative;
    /* top: -65px; */
    width: 100%;
    max-width: 100%;
    margin-bottom: 50px;
    padding-left: 6rem;

    @media ${theme.media.lteMedium} {
      top: -100px;
      padding-left: 1rem;
    }
  `}
`;

export const RowHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 1.8rem;
`;

export const TitleRow = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: 700;
    color: ${theme.colors.white};
    text-rendering: optimizeLegibility;

    @media ${theme.media.lteMedium} {
      font-size: calc(${theme.font.sizes.medium} - 3px);
    }
  `}
`;

export const RowListContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    overflow-x: hidden;
    transition: all 500ms ease-in-out;

    .arrow-left,
    .arrow-right {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 400px;
      width: 40px;
      background: transparent;
      color: ${theme.colors.white};
      opacity: 0;
      transition: opacity 0.5s ease;
      overflow: hidden;
      z-index: 9;
      cursor: pointer;

      @media ${theme.media.lteMedium} {
        display: none;
      }
    }

    .arrow-left {
      left: 0;
    }

    .arrow-right {
      right: 0;
    }

    &:hover .arrow-left,
    &:hover .arrow-right {
      opacity: 1;
    }

    .arrow-left:hover,
    .arrow-right:hover {
      background-color: rgba(0, 0, 0, 0.6);
    }

    @media ${theme.media.lteMedium} {
      overflow-x: scroll;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  `}
`;

export const RowAnimeListContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 1rem;
    transition: all 450ms ease-in-out;

    @media ${theme.media.lteMedium} {
      gap: 0;
    }
  `}
`;

export const RowAnimeListItem = styled.div`
  display: inline-block;
`;
