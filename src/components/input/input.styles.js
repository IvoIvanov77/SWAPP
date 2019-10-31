import styled from 'styled-components';

export const GroupContainer = styled.div`
  margin: 30px 0;
  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

export const FormInputContainer = styled.input`  
  background-color: ${({ theme }) => theme.inputs.background};  
  color: ${({ theme }) => theme.inputs.fontColor};  
  font-size: 18px;
  padding: 10px 0px;
  width: 100%
  display: block; 
  border-color: ${({ theme }) => theme.inputs.borderColor};  
  border-radius: 4px; 
  margin: 25px auto; 
`;

FormInputContainer.displayName = 'FormInputContainer';
