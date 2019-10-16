import React from 'react';

import StarshipInfo from '../../components/starship-info/starship-info.component';
import {
  DetailsPageContainer,
  StarshipName,
  FlexContainer,
  LeftContainer,
  RightContainer,
} from './starship-details-page.styles';

const StarshipDetailsPage = ({ starship }) => {
  const { name, model } = starship;
  return (
    <DetailsPageContainer>
      <StarshipName>{name}</StarshipName>
      <h1>{model}</h1>
      <hr />
      <FlexContainer>
        <LeftContainer>
          <StarshipInfo starship={starship} />
        </LeftContainer>
        <RightContainer></RightContainer>
      </FlexContainer>
    </DetailsPageContainer>
  );
};

export default StarshipDetailsPage;
