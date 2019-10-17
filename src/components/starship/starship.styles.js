import styled from 'styled-components';

export const StarshipContainer = styled.div`
  border-radius: 10px;
  border-color: ${({ theme }) => theme.cards.borderColor};
  background-color: ${({ theme }) => theme.cards.background};
  display: flex;
  position: relative;
  margin: 20px auto;
`;

export const StarshipImage = styled.img`
  width: 100px;
  border-radius: 10px 0px 0px 10px;
  position: relative;
`;

export const StarshipNameContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translateY(-50%);
`;

export const StarshipName = styled.h3`
  color: ${({ theme }) => theme.primaryHeading.fontColor};
`;
