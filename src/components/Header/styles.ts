import styled, { css } from 'styled-components';

export const HeaderNav = styled.div`
  ${({ theme }) => css`
    .nav-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 60px;
      background-color: #141519;
      padding: 0px 30px;
      transition: all 600ms ease 0s;
      z-index: 101;

      svg {
        display: none;

        @media ${theme.media.lteMedium} {
          display: block;
          color: ${theme.colors.mediumGray};
          transition: all 250ms ease-in-out 0s;
          cursor: pointer;

          &:hover {
            color: ${theme.colors.white};
          }
        }
      }
    }

    @media ${theme.media.lteMedium} {
      padding: 0px 30px;
    }
  `}
`;

export const Logo = styled.a`
  display: inline-block;
  width: 160px;
  padding-top: 5px;
  font-size: 0;
  cursor: pointer;

  img {
    display: block;
    width: 100%;
  }
`;

export const NavMenu = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    height: 100%;
    margin: 0px;
    padding: 0px;
    margin-right: auto;
    margin-left: 25px;

    a {
      display: flex;
      align-items: center;
      padding: 0px 12px;
      text-decoration: none;

      span {
        position: relative;
        white-space: nowrap;
        color: ${theme.colors.mediumGray};
        font-size: 15px;
        font-weight: 600;
        line-height: 1.08;
        padding: 2px 0px;

        &:before {
          content: '';
          position: absolute;
          right: 0;
          left: 0;
          bottom: -6px;
          height: 2px;
          width: auto;
          transform-origin: left center;
          transform: scaleX(0);
          transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
          background-color: ${theme.colors.secondaryColor};
          opacity: 0;
          visibility: hidden;
        }
      }

      &:hover {
        span:before {
          transform: scaleX(1);
          opacity: 1;
          visibility: visible !important;
        }
      }
    }

    @media ${theme.media.lteMedium} {
      display: none;
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

export const UserImg = styled.img`
  height: 100%;
`;

export const DropDown = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 48px;
    right: 0;
    width: 120px;
    background-color: ${theme.colors.primaryColor};
    color: ${theme.colors.mediumGray};
    border: 1px solid ${theme.colors.secondaryColor};
    border-radius: 4px;
    box-shadow: rgb(0 0 0 /50%) 0px 0px 18px;
    padding: 10px;
    font-size: 16px;
    font-weight: 600;
    opacity: 0;
  `}
`;

export const SignOut = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 48px;
  height: 48px;
  cursor: pointer;

  ${UserImg} {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

export const ContainerMobile = styled.div`
  ${({ theme }) => css`
    display: none;

    @media ${theme.media.lteMedium} {
      display: flex;
    }
  `}
`;
