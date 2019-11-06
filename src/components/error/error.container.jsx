import React from 'react';
import { useApolloClient } from '@apollo/react-hooks';

import { default as LoginPage } from '../../pages/login/login-page.container';
import { LOCAL_STORAGE_ITEMS, ERORR_MESSAGES } from '../../util/constants';

const ProcessError = ({ errorMessage }) => {
  const client = useApolloClient();
  const { FAILED_TO_FETCH } = ERORR_MESSAGES;
  client.writeData({ data: { authenticated: false } });
  localStorage.removeItem(LOCAL_STORAGE_ITEMS.AUTH_TOKEN);
  return (
    <LoginPage errorMessage={errorMessage ? errorMessage : FAILED_TO_FETCH} />
  );
};

export default ProcessError;
