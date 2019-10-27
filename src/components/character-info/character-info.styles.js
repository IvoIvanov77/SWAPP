import styled from 'styled-components';

export const CharacterInfoContainer = styled.div.attrs(props => ({
  className: 'cartColors',
}))`
  margin: 3%;
  padding: 3px 0;
  border-radius: 10px;
`;

export const CharacterImage = styled.img`
  width: 85%;
  display: block;
  margin: 0 auto;
`;

export const CharacterName = styled.h2.attrs(props => ({
  className: 'starWarsFont',
}))`
  text-align: center;
  margin: 15px;
`;

export const CharacterInfoFields = styled.div`
  width: 85%;
  margin: auto;
  font-weight: bold;
`;
