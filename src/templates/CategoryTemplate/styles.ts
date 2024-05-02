import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin-top: 60px;
    color: ${theme.colors.white};
  `}
`;

export const HeaderContainerCategory = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 6.5rem;
  margin-bottom: 1rem;
`;

export const HeaderContentCategory = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const TitleHeaderContentCategory = styled.h1`
  ${({ theme }) => css`
    font-size: calc(${theme.font.sizes.large} - 6px);
    font-weight: 500;
  `}
`;

export const DescriptionHeaderCategory = styled.p`
  width: 100%;
  max-width: 280px;
  margin: 0 auto;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.8rem;
`;

export const CategoryListArea = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(249px, 1fr));
    justify-items: center;
    grid-row-gap: 2rem;
    width: 100%;
    max-width: 1200px;
    margin: 20px auto;
    padding-top: 4rem;
    border-top: 2px solid #4a4e58;

    @media ${theme.media.lteMedium} {
      grid-template-columns: repeat(2, minmax(200px, 1fr));
    }
  `}
`;

export const ListGrid = styled.div``;
