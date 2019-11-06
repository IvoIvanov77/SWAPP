import React from 'react';
import { ThemeProvider } from 'styled-components';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import { lightTheme, darkTheme } from './util/themes';
import { COLOR_THEMES } from './util/constants';

const GET_COLOR_THEME = gql`
  {
    colorTheme @client
  }
`;

const AppicationThemeProvider = props => {
  const {
    data: { colorTheme },
  } = useQuery(GET_COLOR_THEME);
  const currentTheme =
    colorTheme === COLOR_THEMES.LIGHT_THEME ? lightTheme : darkTheme;

  return <ThemeProvider theme={currentTheme}>{props.children}</ThemeProvider>;
};

export default AppicationThemeProvider;
