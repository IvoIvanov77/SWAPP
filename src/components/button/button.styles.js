import styled from 'styled-components';

export const ButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  border-color: ${({ theme }) => theme.solidButtons.borderColor};
  color: ${({ theme }) => theme.solidButtons.fontColor};
  background-color: ${({ theme }) => theme.solidButtons.background};
  border-radius: 10px;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
`;
