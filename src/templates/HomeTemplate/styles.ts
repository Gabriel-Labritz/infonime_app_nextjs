import styled, { css } from 'styled-components';

export const Wrapper = styled.div``;

export const AnimeTrendingArea = styled.div`
  ${({ theme }) => css`
    margin-bottom: 80px;

    @media ${theme.media.lteMedium} {
      margin-bottom: 240px;
    }
  `}
`;
