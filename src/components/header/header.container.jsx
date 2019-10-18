import React from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

import Header from './header.component';

const TOGGLE_COLOR_THEME = gql`
  mutation ToggleColorTheme {
    toggleColorTheme @client
  }
`;

const HeaderContainer = () => {
  const [toggleColorTheme] = useMutation(TOGGLE_COLOR_THEME);
  return <Header onClick={() => toggleColorTheme()} />;
};

export default HeaderContainer;
