import { FaInstagram } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';
import { IoLogoLinkedin } from 'react-icons/io';

import * as Styled from './styles';
import Link from 'next/link';

export default function Footer() {
  return (
    <Styled.FooterContainer>
      <Styled.FooterText>
        Feito por{' '}
        <Link href={'https://github.com/Gabriel-Labritz'}>
          @gabriel_labritz
        </Link>
      </Styled.FooterText>

      <Styled.FooterDescription>
        Obs: Essa aplicação foi totalmente inspirado na plataforma de streamer
        @Crunchroll, somente com o ituito de colocar em prática os conhecimentos
        obtidos até então.
      </Styled.FooterDescription>

      <Styled.FooterSocialMediaArea>
        <Link href={'https://www.instagram.com/litz_gabriel/'}>
          <span>
            <FaInstagram size={22} />
            Instagram
          </span>
        </Link>

        <Link href={'https://github.com/Gabriel-Labritz'}>
          <span>
            <FaGithub size={22} />
            GitHub
          </span>
        </Link>

        <Link href={'https://br.linkedin.com/in/gabriel-labritz-199499229'}>
          <span>
            <IoLogoLinkedin size={25} />
            Linkedin
          </span>
        </Link>
      </Styled.FooterSocialMediaArea>
    </Styled.FooterContainer>
  );
}
