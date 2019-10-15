import React from 'react';

import CharacterInfo from '../../components/character-info/character-info.component';
import StarshipsList from '../../components/starships-list/starships-list.component';
import {
  DetailsPageContainer,
  CharacterName,
  FlexContainer,
  LeftContainer,
  RightContainer,
} from './character-details-page.styles';

const ChatacterDetaislPage = ({ person }) => {
  const { name, starships } = person;
  const starshipsList = starships.edges.map(e => e.node);
  return (
    <DetailsPageContainer>
      <CharacterName>{name}</CharacterName>
      <hr />
      <FlexContainer>
        <LeftContainer>
          <CharacterInfo person={person} />
        </LeftContainer>
        <RightContainer>
          <h2>Piloted Starships</h2>
          <hr />
          <StarshipsList starships={starshipsList} />
        </RightContainer>
      </FlexContainer>
    </DetailsPageContainer>
  );
};

export default ChatacterDetaislPage;
