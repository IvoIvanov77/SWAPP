import styled from 'styled-components';

export const LoginPageContainer = styled.div`
  background-color: black;
  padding: 10px;
  margin: 10% 20%;
  @media (max-width: 800px) {
    margin: 10% 0;
  }
`;

export const LoginPageTitleContainer = styled.div.attrs(props => ({
  className: 'starWarsFont',
}))`
  font-size: 100px;
  color: #ffe300;
  text-align: center;
  @media (max-width: 480px) {
    font-size: 40px;
  }
`;

export const LoginFormContainer = styled.div`
  margin: 10px;
  border-radius: 10px;
  background-color: #fff;
`;

export const FormInputsContainer = styled.form`
  margin: auto;
  padding: 20px;
  border-radius: 5%;
  background-color: #fff;
  width: 80%;
`;

export const FormButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 800px) {
    justify-content: center;
  }
`;
