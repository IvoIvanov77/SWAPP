import styled from 'styled-components';

export const DetailsPageContainer = styled.div`
  width: 50%;
  margin: 50px auto;

  @media (max-width: 1200px) {
    width: 80%;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const StarshipName = styled.h1.attrs(props => ({
  className: 'starWarsFont',
}))`
  text-align: center;
  color: ${({ theme }) => theme.primaryHeading.fontColor};
`;

StarshipName.displayName = 'StarshipName';

export const StarshipModel = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.secandaryHeading.fontColor};
`;

StarshipModel.displayName = 'StarshipModel';

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

export const RightContainer = styled.div`
  width: 90%;
  h2 {
    text-align: center;
  }
`;
