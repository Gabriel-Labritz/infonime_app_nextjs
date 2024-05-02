import styled from 'styled-components';

export const Container = styled.div`
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 25px;
  width: 100%;
  max-width: 1250px;
  color: white;
  margin: 60px auto;

  a {
    text-decoration: none;
    color: white;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    padding: 0px 40px;
    margin-bottom: 200px;
  }
`;

export const Wrap = styled.div`
  /* border: 1px solid white; */
  position: relative;
  border-radius: 10px;
  padding-top: 56.25%;
  box-shadow:
    rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  cursor: pointer;
  overflow: hidden;

  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    opacity: 1;
    inset: 0px;
    transition: opacity 500ms ease-in-out 0s;
    z-index: 1;
  }

  img {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 0;
  }

  &:hover {
    box-shadow:
      rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    /* border-color: #871ed9; */

    img {
      opacity: 1;
    }
  }
`;
