import React from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

import LoginPage from './login-page.component';

const SIGNIN_USER = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
    }
  }
`;

const LoginPageContainer = () => {
  const [signIn, { loading, error, data }] = useMutation(SIGNIN_USER);

  if (loading) {
    return <h1>Loading...............</h1>;
  }
  if (error) {
    return <h1>Error page</h1>;
  }
  if (data) {
    const token = data.signIn.token;
    localStorage.setItem('token', token);
  }
  return (
    <LoginPage
      signin={(email, password) => signIn({ variables: { email, password } })}
    />
  );
};

export default LoginPageContainer;
