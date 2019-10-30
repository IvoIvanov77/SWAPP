import styled from 'styled-components';

export const CharactersListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 1200px) {
    margin: 0;
    justify-content: center;
  }
`;

export const FetchMoreButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
