import styled from 'styled-components';

export const StarshipContainer = styled.div.attrs(props => ({
  className: 'cartColors',
}))`
  border-radius: 10px;
  display: flex;
  position: relative;
  margin: 20px auto;
`;

export const StarshipImage = styled.img`
  width: 100px;
  border-radius: 10px 0px 0px 10px;
  position: relative;
`;

StarshipImage.displayName = 'StarshipImage';

export const StarshipNameContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translateY(-50%);
  @media (max-width: 480px) {
    left: 40%;
  }
`;

StarshipNameContainer.displayName = 'StarshipNameContainer';
