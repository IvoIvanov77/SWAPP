import React from 'react';
import { useApolloClient } from '@apollo/react-hooks';

import { default as LoginPage } from '../../pages/login/login-page.container';

const ProcessError = ({ error }) => {
  const client = useApolloClient();
  client.writeData({ data: { authenticated: false } });
  localStorage.removeItem('token');
  return <LoginPage errorMessage={error.message} />;
};

export default ProcessError;
