import React from 'react';
import { gql } from 'apollo-boost';
import { useMutation, useApolloClient } from '@apollo/react-hooks';

import LoginPage from './login-page.component';
import ProcessError from '../../components/error/error.container';
import Spinner from '../../components/spinner/spinner.component';
import { LOCAL_STORAGE_ITEMS } from '../../util/constants';

const SIGNIN_USER = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
    }
  }
`;

const LoginPageContainer = ({ errorMessage }) => {
  const [signIn, { loading, error, data }] = useMutation(SIGNIN_USER);
  const client = useApolloClient();
  const { AUTH_TOKEN } = LOCAL_STORAGE_ITEMS;

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    localStorage.removeItem(AUTH_TOKEN);
    client.writeData({ data: { authenticated: false } });
    return <ProcessError error={error} />;
  }
  if (data) {
    const token = data.signIn.token;
    localStorage.setItem(AUTH_TOKEN, token);
    client.writeData({ data: { authenticated: true } });
  }
  return (
    <LoginPage
      signin={(email, password) => signIn({ variables: { email, password } })}
      errorMessage={errorMessage}
    />
  );
};

export default LoginPageContainer;
