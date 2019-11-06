import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { default as LoginPage } from './pages/login/login-page.container';
import Pages from './pages';

export const IS_AUTHENTICATED = gql`
  query IsAuthenticated {
    authenticated @client
  }
`;

function App() {
  const {
    data: { authenticated },
  } = useQuery(IS_AUTHENTICATED);
  console.log(authenticated);
  return <>{authenticated ? <Pages /> : <LoginPage />}</>;
}

export default App;
