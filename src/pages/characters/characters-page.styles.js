import styled from 'styled-components';

export const CharactersPageContainer = styled.div`
  width: 60%;

  @media (max-width: 1600px) {
    width: 80%;
  }

  margin: 50px auto;
  @media (max-width: 480px) {
    width: 95%;
    margin: 30px auto;
  }
`;
