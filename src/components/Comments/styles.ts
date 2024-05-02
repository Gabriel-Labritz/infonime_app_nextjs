import styled, { css } from 'styled-components';

export const CommentWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 600px;
    margin: ${theme.spacings.large} auto;
  `}
`;
