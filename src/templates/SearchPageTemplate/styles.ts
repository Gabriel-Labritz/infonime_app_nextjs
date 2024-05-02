import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin-top: 60px;
    color: ${theme.colors.white};
  `}
`;

export const SearchArea = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 6rem;
    background-color: #141519;
    width: 100%;
    height: 110px;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${theme.media.lteMedium} {
      height: 85px;
    }
  `}
`;

export const SearchField = styled.div`
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
`;

export const SearchContainer = styled.div`
  ${({ theme }) => css`
    width: 65.625rem;
    margin: 0 auto;
    padding-left: 2.5rem;
    padding-right: 2.5rem;

    @media ${theme.media.lteMedium} {
      width: 41.625rem;
    }
  `}
`;

export const SearchInputContainer = styled.div`
  ${({ theme }) => css`
    border-bottom: 0.225rem solid #59595b;
    display: flex;
    margin: 0 auto;
    max-width: 55rem;

    input {
      width: 100%;
      background-color: transparent;
      border: none;
      color: #ffffff;
      display: block;
      flex: 1 1 auto;
      font-size: 2.6rem;
      line-height: 2rem;
      padding-top: 0;
      padding-bottom: 0.25rem;
      text-rendering: optimizeLegibility;

      &:focus {
        outline: none;
      }

      @media ${theme.media.lteMedium} {
        max-width: 45rem;
      }
    }
  `}
`;

export const HeaderContentSearch = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 13.5rem;
  margin-bottom: 1rem;
`;

export const TitleContentSearch = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const TitleHeaderContentSearch = styled.h1`
  ${({ theme }) => css`
    font-size: calc(${theme.font.sizes.large} - 6px);
    font-weight: 500;
  `}
`;

export const ListSearchArea = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(249px, 1fr));
  justify-items: center;
  grid-row-gap: 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 4rem;
  border-top: 2px solid #4a4e58;
`;

export const ListSearchGrid = styled.div``;

export const SearchNotFoundArea = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 4rem;
  border-top: 2px solid #4a4e58;
`;

export const SearchNotFoundContent = styled.div``;

export const SearchNotFoundTitle = styled.h2`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    font-size: calc(${theme.font.sizes.large} - 6px);
    font-weight: 500;

    @media ${theme.media.lteMedium} {
      font-size: calc(${theme.font.sizes.large} - 8px);
      font-weight: 500;
    }
  `}
`;
