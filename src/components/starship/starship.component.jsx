import React from 'react';
import { Link } from 'react-router-dom';

import {
  StarshipContainer,
  StarshipImage,
  StarshipNameContainer,
  StarshipName,
} from './starship.styles';

const Starchip = ({ image, name, linkUrl }) => {
  return (
    <Link to={`/starships/${linkUrl}`}>
      <StarshipContainer>
        <StarshipImage src={image} alt={name}></StarshipImage>
        <StarshipNameContainer>
          <StarshipName>{name}</StarshipName>
        </StarshipNameContainer>
      </StarshipContainer>
    </Link>
  );
};

export default Starchip;
