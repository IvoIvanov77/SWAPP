import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  CharacterContainer,
  CharacterImage,
  CharacterNameContainer,
  CharacterName,
} from './character.styles';

const Character = ({ image, name, history, linkUrl, match }) => {
  return (
    <CharacterContainer onClick={() => history.push(`${match.url}/${linkUrl}`)}>
      <CharacterImage src={image} alt={name}></CharacterImage>
      <CharacterNameContainer>
        <CharacterName>{name}</CharacterName>
      </CharacterNameContainer>
    </CharacterContainer>
  );
};

export default withRouter(Character);
