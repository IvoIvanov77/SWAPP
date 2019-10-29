import React from 'react';

import Character from '../../components/character/character.component';
import CustomButton from '../button/button.component';
import {
  CharactersListContainer,
  FetchMoreButtonContainer,
} from './characters-list.styles';

const ChatactersList = ({ characters, fetchMore, hasNextPage }) => {
  return (
    <CharactersListContainer>
      {characters.map(({ id, ...otherProps }) => (
        <Character key={id} linkUrl={id} {...otherProps} />
      ))}
      {hasNextPage ? (
        <FetchMoreButtonContainer>
          <CustomButton onClick={fetchMore}>Load More</CustomButton>
        </FetchMoreButtonContainer>
      ) : null}
    </CharactersListContainer>
  );
};

export default ChatactersList;
