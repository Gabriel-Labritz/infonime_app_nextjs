import styled, { css } from 'styled-components';

export const PageWrapper = styled.div`
  position: relative;
  top: 60px;
`;

export const AnimeBodyArea = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 40%;
    width: 100%;
    background-color: #000000;

    @media ${theme.media.lteMedium} {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  `}
`;

export const AnimeBodyContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1100px;
  margin: 50px auto;
`;

export const AnimeInfosArea = styled.div``;

export const AnimeTitle = styled.h1`
  ${({ theme }) => css`
    color: #ffffff;
    font-weight: 600;
    line-height: 2.75rem;
    margin-bottom: 2rem;

    @media ${theme.media.lteMedium} {
      font-size: ${theme.font.sizes.large};
    }
  `}
`;

export const AnimesSeasonInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 16px;
  font-weight: 600;
  color: #a0a0a0;
  margin-bottom: 2rem;

  &::before {
    content: '';
    height: 0.35rem;
    width: 0.35rem;
    background-color: #a0a0a0;
    line-height: 1;
    transform: rotate(45deg);
  }
`;

export const ButtonAddList = styled.button`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    width: 250px;
    padding: 5px 15px;
    font-size: 14px;
    font-weight: 600;
    background-color: transparent;
    color: ${theme.colors.secondaryColor};
    border: 2px solid ${theme.colors.secondaryColor};
    cursor: pointer;
    text-transform: uppercase;
    margin-bottom: 2rem;

    &:hover {
      filter: brightness(110%);
    }

    @media ${theme.media.lteMedium} {
      width: 100%;
      padding-top: 10px;
      padding-bottom: 10px;
    }
  `}
`;

export const ButtonRemoveList = styled.button`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    width: 250px;
    padding: 5px 15px;
    font-size: 14px;
    font-weight: 600;
    background-color: ${theme.colors.secondaryColor};
    transition: all 400ms ease-in-out 0s;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    margin-bottom: 2rem;

    &:hover {
      filter: brightness(110%);
    }

    @media ${theme.media.lteMedium} {
      width: 100%;
      padding-top: 10px;
      padding-bottom: 10px;
    }
  `}
`;

export const Description = styled.div`
  max-width: 690px;
  width: 100%;
  margin-bottom: 2rem;

  p {
    font-size: 16px;
    font-weight: 600;
    line-height: 2.325rem;
    color: #ffffff;
    white-space: pre-line;
  }
`;

export const AnimePosterArea = styled.div`
  ${({ theme }) => css`
    img {
      display: block;
      object-fit: contain;
      height: 350px;
      width: 250px;
    }

    @media ${theme.media.lteMedium} {
      display: none;
    }
  `}
`;
