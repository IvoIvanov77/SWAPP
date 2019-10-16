import React from 'react';

import { default as StarshipInfo } from '../../components/starship-info/starship-info.container';
import {
  DetailsPageContainer,
  StarshipName,
  FlexContainer,
  LeftContainer,
  RightContainer,
} from './starship-details-page.styles';

const StarshipDetailsPage = ({ match }) => {
  return (
    <DetailsPageContainer>
      <StarshipName>Name</StarshipName>
      <hr />
      <FlexContainer>
        <LeftContainer>
          <StarshipInfo starshipId={match.params.starshipId} />
        </LeftContainer>
        <RightContainer></RightContainer>
      </FlexContainer>
    </DetailsPageContainer>
  );
};

export default StarshipDetailsPage;
