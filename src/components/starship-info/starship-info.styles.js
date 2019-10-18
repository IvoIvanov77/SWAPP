import styled from 'styled-components';

export const StarshipInfoContainer = styled.div.attrs(props => ({
  className: 'cartColors',
}))`
  margin: 3%;
  padding: 3px 0;
  border-radius: 10px;
`;

export const StarshipImage = styled.img`
  width: 85%;
  display: block;
  margin: 0 auto;
`;

export const StarshipName = styled.h2`
  text-align: center;
  margin: 15px;
`;

export const StarshipInfoFields = styled.div`
  width: 85%;
  margin: auto;
  font-weight: bold;
`;
