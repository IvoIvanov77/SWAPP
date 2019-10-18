import React from 'react';
import { Link } from 'react-router-dom';

import {
  StarshipContainer,
  StarshipImage,
  StarshipNameContainer,
} from './starship.styles';

const Starchip = ({ image, name, linkUrl }) => {
  return (
    <Link to={`/starships/${linkUrl}`}>
      <StarshipContainer>
        <StarshipImage src={image} alt={name}></StarshipImage>
        <StarshipNameContainer>
          <h2>{name}</h2>
        </StarshipNameContainer>
      </StarshipContainer>
    </Link>
  );
};

export default Starchip;
