import styled, { css } from 'styled-components';

// Card Hover Styles
export const ContainerCardHover = styled.div`
  display: none;
  transition: opacity 250ms ease;
`;

export const CardHoverContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 100%;
  position: relative;
  background: #141519;
  border-color: 0 0 0 0.5rem #141519;
  padding: 10px;
  cursor: pointer;
`;

export const CardHoverPosterWrapper = styled.a`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  opacity: 0.05;
`;

export const ContentImageHover = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

export const ContentImageFigureHover = styled.figure`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  img {
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: unset;
  }
`;

export const CardHoverBody = styled.div`
  position: relative;
  flex: 1;
  padding: 0.25rem;
  z-index: 2;

  a {
    text-decoration: none;
  }
`;

export const TitleCardHover = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    margin-bottom: 0.75rem;
    overflow: hidden;
    white-space: unset;
  `}
`;

export const InfoCardMetaContainerHover = styled.div`
  margin-bottom: 0.5rem;
  color: #a0a0a0;
`;

export const CardHoverMeta = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 1.8rem;
  }
`;

export const DescriptionCardHover = styled.h4`
  ${({ theme }) => css`
    max-height: calc(6 * 1.8rem);
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 1.8rem;
    color: ${theme.colors.white};
    overflow: hidden;
    overflow-wrap: break-word;
    white-space: unset;
    word-break: break-all;
  `}
`;

export const CardHoverFooter = styled.div`
  display: flex;
  align-self: flex-start;
  position: relative;
  z-index: 3;
`;

export const CardHoverFooterIcon = styled.div`
  ${({ theme }) => css`
    margin-right: 0.375rem;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 4rem;
      width: 4rem;
      background-color: transparent;
      color: ${theme.colors.secondaryColor};

      border: none;
      cursor: pointer;
    }
  `}
`;

// Card Styles
export const Container = styled.div`
  ${({ theme }) => css`
    position: relative;
    height: 400px;
    width: 240px;
    padding: 0px 10px;

    &:hover ${ContainerCardHover} {
      display: flex;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
    }

    @media ${theme.media.lteMedium} {
      height: 340px;
      width: 200px;
    }
  `}
`;

export const ContentCard = styled.div`
  width: 100%;
  height: 100%;
`;

export const ImgCardContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 320px;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @media ${theme.media.lteMedium} {
      height: 260px;
    }
  `}
`;

export const BodyCard = styled.div`
  margin: 10px 0px;
`;

export const TitleCard = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    margin-bottom: 10px;
  `}
`;

export const SeasonsCardInfo = styled.span`
  ${({ theme }) => css`
    font-size: calc(${theme.font.sizes.small} - 2px);
    font-weight: 600;
    color: #a0a0a0;
  `}
`;
