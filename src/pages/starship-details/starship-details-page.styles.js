import styled from 'styled-components';

export const DetailsPageContainer = styled.div`
  width: 80%;
  margin: 50px auto;
`;

export const StarshipName = styled.h1.attrs(props => ({
  className: 'starWarsFont',
}))`
  text-align: center;
  color: ${({ theme }) => theme.primaryHeading.fontColor};
`;

export const StarshipModel = styled.h2`
  text-align: center;
`;

export const FlexContainer = styled.div`
  display: flex;
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
