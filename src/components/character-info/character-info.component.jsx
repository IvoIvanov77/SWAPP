import React from 'react';

import {
  CharacterInfoContainer,
  CharacterImage,
  CharacterName,
  CharacterInfoFields,
  FieldColor,
} from './character-info.styles';

const CharacterInfo = ({ person }) => {
  const { name, image, height, homeworld, species } = person;

  return (
    <CharacterInfoContainer>
      <CharacterName>{name}</CharacterName>
      <CharacterImage src={image} alt={name}></CharacterImage>
      <CharacterInfoFields>
        <p>
          Height: <FieldColor>{height}</FieldColor>
        </p>
        <p>Weight:</p>
        <p>
          Spices: <FieldColor>{species.name}</FieldColor>
        </p>
        <p>
          Home World: <FieldColor>{homeworld.name}</FieldColor>
        </p>
      </CharacterInfoFields>
    </CharacterInfoContainer>
  );
};

export default CharacterInfo;
