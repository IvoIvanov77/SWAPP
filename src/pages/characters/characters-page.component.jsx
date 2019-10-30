import React from 'react';

import CharacterListContainer from '../../components/characters-list/characters-list.container';
import { CharactersPageContainer } from './characters-page.styles';

const CharactersPage = () => {
  return (
    <CharactersPageContainer>
      <CharacterListContainer initialCount={12} />;
    </CharactersPageContainer>
  );
};

export default CharactersPage;
