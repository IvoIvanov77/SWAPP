import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery, useMutation, useApolloClient } from '@apollo/react-hooks';

import LoginPage from './login-page.component';
import ProcessError from '../../components/error/error.container';
import Spinner from '../../components/spinner/spinner.component';
import { LOCAL_STORAGE_ITEMS, ERORR_MESSAGES } from '../../util/constants';

const GET_ERROR_MESSAGE = gql`
  {
    errorMessage @client
  }
`;

const SIGNIN_USER = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
    }
  }
`;

const LoginPageContainer = () => {
  const [signIn, { loading, error, data }] = useMutation(SIGNIN_USER);
  const client = useApolloClient();
  const { AUTH_TOKEN } = LOCAL_STORAGE_ITEMS;
  const { INVALID_CREDENTIALS } = ERORR_MESSAGES;
  const {
    data: { errorMessage },
  } = useQuery(GET_ERROR_MESSAGE);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <ProcessError errorMessage={INVALID_CREDENTIALS} />;
  }
  if (data) {
    const token = data.signIn.token;
    localStorage.setItem(AUTH_TOKEN, token);
    client.writeData({ data: { authenticated: true } });
    client.writeData({ data: { errorMessage: '' } });
  }
  return (
    <LoginPage
      signin={(email, password) => signIn({ variables: { email, password } })}
      errorMessage={errorMessage}
    />
  );
};

export default LoginPageContainer;
