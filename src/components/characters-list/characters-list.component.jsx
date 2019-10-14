import React from 'react';

import Character from '../../components/character/character.component';
import { CharactersListContainer } from './characters-list.styles';

const ChatactersList = ({ characters }) => {
  return (
    <CharactersListContainer>
      {characters.map(({ id, ...otherProps }) => (
        <Character key={id} linkUrl={id} {...otherProps} />
      ))}
    </CharactersListContainer>
  );
};

export default ChatactersList;
