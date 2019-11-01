import styled from 'styled-components';

export const CharacterInfoContainer = styled.div.attrs(props => ({
  className: 'cartColors',
}))`
  margin: 3%;
  padding: 3px 0;
  border-radius: 10px;
`;

CharacterInfoContainer.displayName = 'CharacterInfoContainer';

export const CharacterImage = styled.img`
  width: 85%;
  display: block;
  margin: 0 auto;
`;

CharacterImage.displayName = 'CharacterImage';

export const CharacterName = styled.h2.attrs(props => ({
  className: 'starWarsFont',
}))`
  text-align: center;
  margin: 15px;
`;

CharacterName.displayName = 'CharacterName';

export const CharacterInfoFields = styled.div`
  width: 85%;
  margin: auto;
  font-weight: bold;
`;
