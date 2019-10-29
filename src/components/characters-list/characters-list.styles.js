import styled from 'styled-components';

export const CharactersListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 50px;
  @media (max-width: 1200px) {
    margin: 0;
  }
`;

export const FetchMoreButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
