import styled, { css } from 'styled-components';

export const AnimeCategoriesContainer = styled.div`
  margin-bottom: 3rem;
`;

export const AnimeCategoriesContent = styled.div`
  ${({ theme }) => css`
    display: inline-flex;
    max-width: 20.9375rem;
    margin-top: 0.5rem;
    margin-right: 0.5rem;
    background-color: #213944;

    small {
      display: inline-block;
      font-size: calc(${theme.font.sizes.small} - 3px);
      font-weight: 600;
      line-height: 2rem;
      padding: 4px;
      color: #dadada;
      text-overflow: ellipsis;
      text-transform: uppercase;
      white-space: nowrap;
      overflow: hidden;
    }
  `}
`;
