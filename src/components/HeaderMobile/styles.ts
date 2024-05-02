import styled, { css } from 'styled-components';

type HeaderProps = {
  isVisible: boolean;
};

export const NavMenuMobile = styled.div<HeaderProps>`
  ${({ theme, isVisible }) => css`
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 60px;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #141519;
    transition: all 200ms ease-in-out;
    padding: 20px 0px;
    opacity: 0;
    z-index: 100;
    pointer-events: none;

    ${isVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
    `}

    > svg {
      position: absolute;
      top: 1rem;
      left: 1rem;
    }

    nav {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      small {
        font-size: calc(${theme.font.sizes.small} - 3px);
        line-height: 1.5rem;
        font-weight: 600;
        color: #a0a0a0;
        text-transform: uppercase;
        padding-left: 30px;
      }

      a {
        text-decoration: none;

        span {
          display: block;
          font-weight: 600;
          padding: 14px 30px;
          color: #f8f8f8;

          &:hover {
            background-color: ${theme.colors.primaryColor};
          }
        }
      }
    }
  `}
`;

export const Login = styled.a`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 20px;
    color: rgb(218, 218, 218);
    border: 2px solid rgb(218, 218, 218);
    transition: all 300ms ease-in-out 0s;
    cursor: pointer;

    span {
      font-size: ${theme.font.sizes.small};
      font-weight: 600;
      text-transform: uppercase;
    }

    &:hover {
      color: ${theme.colors.white};
      border: 2px solid ${theme.colors.white};
    }
  `}
`;
