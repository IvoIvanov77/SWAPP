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
        <p>
          Class: <span>{starshipClass}</span>
        </p>
        <p>
          Cost: <span>{cost}</span>
        </p>
        <p>
          Crew: <span>{crew}</span>
        </p>
        <p>
          Max Atmospheric Speed: <span>{maxAtmosphericSpeed}</span>
        </p>
        <p>
          Hiperdrive Rating: <span>{hyperdriveRating}</span>
        </p>
      </StarshipInfoFields>
    </StarshipInfoContainer>
  );
};

export default StarshipInfo;
