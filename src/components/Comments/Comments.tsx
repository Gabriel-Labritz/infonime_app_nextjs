import { DiscussionEmbed } from 'disqus-react';
import * as Styled from './styles';

export type CommentsProps = {
  id: number;
  slug: string;
  title: string;
  allowComments: boolean;
};

export default function Comments({
  id,
  slug,
  title,
  allowComments,
}: CommentsProps) {
  const stringId = String(id);
  if (!allowComments) return null;

  return (
    <Styled.CommentWrapper>
      <DiscussionEmbed
        shortname="crunchyroll-clone"
        config={{
          url: `http://127.0.0.1:1337/anime/${slug}`,
          identifier: stringId,
          title: title,
          language: 'pt_BR',
        }}
      ></DiscussionEmbed>
    </Styled.CommentWrapper>
  );
}
