import React from 'react';

import { default as CharacterList } from '../../components/characters-list/characters-list.container';
import { CharactersPageContainer } from './characters-page.styles';

const CharactersPage = () => {
  return (
    <CharactersPageContainer>
      <CharacterList initialCount={12} />
    </CharactersPageContainer>
  );
};

export default CharactersPage;
