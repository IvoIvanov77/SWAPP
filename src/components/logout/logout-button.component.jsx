import React from 'react';
// import { gql } from 'apollo-boost';
import { useApolloClient } from '@apollo/react-hooks';

import { LogoutIcon } from './logout-button.styles';

// const INVALIDATE_SESSION = gql`
//     mutation IvalidateSession {
//         invalidateSession @client
//     }
//   `;

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
