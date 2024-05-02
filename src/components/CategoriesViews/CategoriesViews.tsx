import Link from 'next/link';
import * as Styled from './styles';

export default function CategoriesViews() {
  return (
    <Styled.Container>
      <Link href={`/category/shounen`}>
        <Styled.Wrap>
          <h2>Shounen</h2>
          <img src="/videos/tumblr_o7eodxGc4N1rboeh5o1_500.gif" alt="" />
        </Styled.Wrap>
      </Link>

      <Link href={`/category/romance`}>
        <Styled.Wrap>
          <h2>Romance</h2>
          <img src="/videos/kaguya-sama-kaguya.gif" alt="" />
        </Styled.Wrap>
      </Link>

      <Link href={`/category/drama`}>
        <Styled.Wrap>
          <h2>Drama</h2>
          <img src="/videos/eren-yeager-eren.gif" alt="" />
        </Styled.Wrap>
      </Link>
    </Styled.Container>
  );
}
