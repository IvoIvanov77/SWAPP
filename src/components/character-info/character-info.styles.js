import styled from 'styled-components';

export const CharacterInfoContainer = styled.div`
  margin: 3%;
  padding: 3px 0;
  border-radius: 10px;
  border-color: ${({ theme }) => theme.cards.borderColor};
  background-color: ${({ theme }) => theme.cards.background};
`;

export const CharacterImage = styled.img`
  width: 85%;
  display: block;
  margin: 0 auto;
`;

export const CharacterName = styled.h2`
  color: ${({ theme }) => theme.primaryHeading.fontColor};
  text-align: center;
  margin: 15px;
`;

export const CharacterInfoFields = styled.div`
  width: 85%;
  margin: auto;
  font-weight: bold;
`;

export const FieldColor = styled.span`
  color: ${({ theme }) => theme.primaryHeading.fontColor};
`;
