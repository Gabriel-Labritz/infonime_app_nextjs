import styled, { css } from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  text-align: center;
  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: relative;
  padding: 80px 40px;
`;

export const BackgroundImg = styled.img`
  position: absolute;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  z-index: -1;
`;

export const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 650px;
`;

export const TitleWrapper = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    line-height: ${theme.spacings.medium}
    font-weight: 800;
    color: ${theme.colors.white};
    margin-bottom: 20px;

    @media ${theme.media.lteMedium} {
      font-size: ${theme.font.sizes.large};
    }
  `}
`;

export const ButtonWrapper = styled.a`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.secondaryColor};
    color: #000000;
    font-size: calc(${theme.font.sizes.small} + 2);
    font-weight: 800;
    padding: 14.5px 0px;
    border: 1px solid transparent;
    border-radius: 4px;
    transition: all 250ms ease-in-out 0s;
    text-transform: uppercase;
    margin-bottom: 20px;

    &:hover {
      filter: brightness(110%);
      cursor: pointer;
    }
  `}
`;

export const BottomWrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    width: 100%;
    max-width: 1100px;
    gap: 25px;

    @media ${theme.media.lteMedium} {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  `}
`;

export const DisplayWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  font-weight: 600;
  color: #ffffff;
`;
