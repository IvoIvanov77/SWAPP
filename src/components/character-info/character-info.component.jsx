import React from 'react';

import {
  CharacterInfoContainer,
  CharacterImage,
  CharacterName,
  CharacterInfoFields,
} from './character-info.styles';

const CharacterInfo = ({ person }) => {
  const { name, image, height, homeworld, species } = person;

  return (
    <CharacterInfoContainer>
      <CharacterName>{name}</CharacterName>
      <CharacterImage src={image} alt={name}></CharacterImage>
      <CharacterInfoFields>
        <h3>
          Height: <span>{height}</span>
        </h3>
        <h3>Weight:</h3>
        <h3>
          Spices: <span>{species.name}</span>
        </h3>
        <h3>
          Home World: <span>{homeworld.name}</span>
        </h3>
      </CharacterInfoFields>
    </CharacterInfoContainer>
  );
};

export default CharacterInfo;
