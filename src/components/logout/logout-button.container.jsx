import React from 'react';
import { useApolloClient } from '@apollo/react-hooks';

import { LogoutIcon } from './logout-button.styles';

const LogoutButton = () => {
  const client = useApolloClient();
  return (
    <LogoutIcon
      onClick={() => {
        client.writeData({ data: { authenticated: false } });
        localStorage.removeItem('token');
      }}
    />
  );
};

export default LogoutButton;
