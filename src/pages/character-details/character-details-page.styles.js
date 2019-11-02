import styled from 'styled-components';

export const DetailsPageContainer = styled.div`
  width: 80%;
  margin: 50px auto;
  @media (max-width: 480px) {
    width: 100%;
  }
`;

DetailsPageContainer.displayName = 'DetailsPageContainer';

export const CharacterName = styled.h1.attrs(props => ({
  className: 'starWarsFont',
}))`
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.primaryHeading.fontColor};
`;

CharacterName.displayName = 'CharacterName';

export const FlexContainer = styled.div`
  display: flex;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const LeftContainer = styled.div`
  width: 90%;
`;

export const RightContainer = styled.div.attrs(props => ({
  className: 'starWarsFont',
}))`
  width: 90%;
  h2 {
    text-align: center;
  }
`;
