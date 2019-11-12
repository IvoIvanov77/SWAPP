import styled from 'styled-components';

export const StarshipInfoContainer = styled.div.attrs(props => ({
  className: 'cartColors',
}))`
  margin: 3%;
  padding: 3px 0;
  border-radius: 10px;

  @media (max-width: 1024px) {
    margin: 0;
  }
`;

StarshipInfoContainer.displayName = 'StarshipInfoContainer';

export const StarshipImage = styled.img`
  width: 85%;
  display: block;
  margin: 0 auto;
`;

StarshipImage.displayName = 'StarshipImage';

export const StarshipName = styled.h2.attrs(props => ({
  className: 'starWarsFont',
}))`
  text-align: center;
  margin: 15px;
`;

StarshipName.displayName = 'StarshipName';

export const StarshipInfoFields = styled.div`
  width: 85%;
  margin: auto;
  font-weight: bold;
`;

StarshipInfoFields.displayName = 'StarshipInfoFields';
