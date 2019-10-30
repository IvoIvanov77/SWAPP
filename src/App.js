import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { default as LoginPage } from './pages/login/login-page.container';
import Pages from './pages';

// import { default as AllStarships } from './components/all-starships/all-starships.container';

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
