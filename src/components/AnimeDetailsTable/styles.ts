import styled from 'styled-components';

export const AnimeDetailsTable = styled.div``;

export const AnimeDetailsTableRow = styled.div`
  display: grid;
  grid-template-columns: 40% 1fr;
  align-items: center;
  border-bottom: 1px solid #4a4e58;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;

  h5 {
    display: inline;
    color: #ffffff;
    font-size: 14px;
  }

  h5::after {
    content: ', ';
  }

  h5:last-child::after {
    content: '';
  }
`;

export const AnimeRowContent = styled.div``;
