import styled from 'styled-components';

export const StarshipContainer = styled.div`
  border-radius: 10px;
  background-color: #fff;
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

export const StarshipName = styled.h1`
  color: #4bd5ee;
`;
