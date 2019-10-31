import React from 'react';
import { default as LoginPage } from '../../pages/login/login-page.container';
// import { useApolloClient } from '@apollo/react-hooks';

const ProcessError = ({ error }) => {
  console.log(error.message);
  // const client = useApolloClient();
  // client.writeData({ data: { authenticated: false } });
  // localStorage.removeItem('token');

  return <LoginPage errorMessage={error.message} />;
};

export default ProcessError;
