import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  CharacterContainer,
  CharacterImage,
  CharacterNameContainer,
} from './character.styles';

const Character = ({ image, name, history, linkUrl, match }) => {
  return (
    <CharacterContainer onClick={() => history.push(`${match.url}/${linkUrl}`)}>
      <CharacterImage src={image} alt={name}></CharacterImage>
      <CharacterNameContainer>
        <h2>{name}</h2>
      </CharacterNameContainer>
    </CharacterContainer>
  );
};

export default withRouter(Character);
