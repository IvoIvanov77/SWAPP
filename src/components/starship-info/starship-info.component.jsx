import React from 'react';

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
    <div>
      <div>
        <h2>{name}</h2>
        <img src={image} alt={name}></img>
        <p>Class {starshipClass}</p>
        <p>Cost {cost}</p>
        <p>Crew {crew}</p>
        <p>
          Max Atmospheric Speed {maxAtmosphericSpeed} {crew}
        </p>
        <p>Hiperdrive Rating {hyperdriveRating}</p>
      </div>
    </div>
  );
};

export default StarshipInfo;
