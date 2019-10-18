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
        <p>
          Height: <span>{height}</span>
        </p>
        <p>Weight:</p>
        <p>
          Spices: <span>{species.name}</span>
        </p>
        <p>
          Home World: <span>{homeworld.name}</span>
        </p>
      </CharacterInfoFields>
    </CharacterInfoContainer>
  );
};

export default CharacterInfo;
