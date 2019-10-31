import React from 'react';

import StarshipInfo from '../../components/starship-info/starship-info.component';
import { default as RadarChart } from '../../components/radar-chart/radar-chart.container';
import {
  DetailsPageContainer,
  StarshipName,
  StarshipModel,
  FlexContainer,
  LeftContainer,
  RightContainer,
} from './starship-details-page.styles';

const StarshipDetailsPage = ({ starship }) => {
  const { name, model } = starship;
  return (
    <DetailsPageContainer>
      <StarshipName>{name}</StarshipName>
      <StarshipModel>({model})</StarshipModel>
      <hr />
      <FlexContainer>
        <LeftContainer>
          <StarshipInfo starship={starship} />
        </LeftContainer>
        <RightContainer>
          <RadarChart starship={starship}></RadarChart>
        </RightContainer>
      </FlexContainer>
    </DetailsPageContainer>
  );
};

export default StarshipDetailsPage;
