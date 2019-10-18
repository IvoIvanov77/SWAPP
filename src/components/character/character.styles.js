import styled from 'styled-components';

export const CharacterContainer = styled.div.attrs(props => ({
  className: 'cartColors',
}))`
  border-radius: 10px;
  display: flex;
  position: relative;
  margin: 20px;
  width: 30%;
`;

export const CharacterImage = styled.img`
  width: 100px;
  border-radius: 10px 0px 0px 10px;
  position: relative;
`;

export const CharacterNameContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translateY(-50%);
`;
