import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin-top: 60px;
    color: ${theme.colors.white};
  `}
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5.5rem;
  margin-bottom: 5rem;
`;

export const TitleContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const TitleHeaderContent = styled.h1`
  ${({ theme }) => css`
    font-size: calc(${theme.font.sizes.large} - 6px);
    font-weight: 500;
  `}
`;

export const DescriptionHeader = styled.p``;

export const ListArea = styled.div`
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

export const ListGrid = styled.div``;

export const EmptyList = styled.div``;
