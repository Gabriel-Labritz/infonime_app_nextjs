import { StrapiAnimeImage } from '../../util-types/strapi-anime-image';
import * as Styled from './styles';

export type AnimeBannerBackgroundProps = {
  title?: string;
  backdrop: StrapiAnimeImage;
};

export default function AnimeBannerBackground({
  title,
  backdrop,
}: AnimeBannerBackgroundProps) {
  return (
    <Styled.AnimeImgArea>
      <Styled.AnimeBackground src={backdrop.url} alt={title} />
      <Styled.AnimeBackdrop src={backdrop.url} alt={title} />
    </Styled.AnimeImgArea>
  );
}
