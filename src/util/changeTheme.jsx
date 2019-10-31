import React from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

const TOGGLE_COLOR_THEME = gql`
  mutation ToggleColorTheme {
    toggleColorTheme @client
  }
`;

const ChangeTheme = ({ children }) => {
  const [toggleColorTheme] = useMutation(TOGGLE_COLOR_THEME);

  return <div onClick={() => toggleColorTheme()}>{children}</div>;
};

export default ChangeTheme;
