import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 30px;
  background: #000000 linear-gradient(180deg, #0000, #213944);
  color: white;
  text-align: center;

  a {
    text-decoration: none;
    color: #a0a0a0;
    transition: all 250ms ease-in-out 0s;

    &:hover {
      text-decoration: underline;
      color: #ffffff;
    }
  }
`;

export const FooterText = styled.h4`
  margin-bottom: 3rem;
`;

export const FooterDescription = styled.p`
  margin-bottom: 3rem;
  line-height: 2.2rem;
  font-weight: 600;
  color: #a0a0a0;
`;

export const FooterSocialMediaArea = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;

  span {
    display: flex;
    gap: 0.6rem;
    font-weight: 600;
  }
`;
