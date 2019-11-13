import React from 'react';

import {
  StarshipInfoContainer,
  StarshipName,
  StarshipImage,
  StarshipInfoFields,
} from './starship-info.styles';

const StarshipInfo = ({ starship }) => {
  const {
    name,
    image,
    starshipClass,
    cost,
    maxAtmosphericSpeed,
    hyperdriveRating,
    crew,
  } = starship;

  return (
    <StarshipInfoContainer>
      <StarshipName>{name}</StarshipName>
      <StarshipImage src={image} alt={name} />
      <StarshipInfoFields>
        <h3>
          Class: <span>{starshipClass}</span>
        </h3>
        <h3>
          Cost: <span>{cost}</span>
        </h3>
        <h3>
          Crew: <span>{crew}</span>
        </h3>
        <h3>
          Max Atmospheric Speed: <span>{maxAtmosphericSpeed}</span>
        </h3>
        <h3>
          Hiperdrive Rating: <span>{hyperdriveRating}</span>
        </h3>
      </StarshipInfoFields>
    </StarshipInfoContainer>
  );
};

export default StarshipInfo;
