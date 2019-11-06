import React from 'react';
import { useApolloClient } from '@apollo/react-hooks';

import { default as LoginPage } from '../../pages/login/login-page.container';
import { LOCAL_STORAGE_ITEMS } from '../../util/constants';

const ProcessError = ({ error }) => {
  const client = useApolloClient();
  client.writeData({ data: { authenticated: false } });
  localStorage.removeItem(LOCAL_STORAGE_ITEMS.AUTH_TOKEN);
  return <LoginPage errorMessage={error.message} />;
};

export default ProcessError;
