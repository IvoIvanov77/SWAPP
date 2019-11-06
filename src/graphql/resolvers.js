import { gql } from 'apollo-boost';

import { COLOR_THEMES } from '../util/constants';

export const typeDefs = gql`
  extend type Mutation {
    ToggleColorTheme: String!
  }
`;

const GET_COLOR_THEME = gql`
  {
    colorTheme @client
  }
`;

export const resolvers = {
  Mutation: {
    toggleColorTheme: (_root, _args, { cache }) => {
      const { colorTheme } = cache.readQuery({
        query: GET_COLOR_THEME,
      });

      const toggledTheme = getToggledColorTheme(colorTheme);

      cache.writeQuery({
        query: GET_COLOR_THEME,
        data: { colorTheme: toggledTheme },
      });
      localStorage.setItem('colorTheme', toggledTheme);
      return toggledTheme;
    },
  },
};

const getToggledColorTheme = currentTheme => {
  const { LIGHT_THEME, DARK_THEME } = COLOR_THEMES;
  if (currentTheme === LIGHT_THEME) {
    return DARK_THEME;
  }
  return LIGHT_THEME;
};
