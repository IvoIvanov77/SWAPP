import { gql } from 'apollo-boost';

// import { lightTheme, darkTheme } from '../util/themes';

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

//todo extract constants
const getToggledColorTheme = currentTheme => {
  if (currentTheme === 'lightTheme') {
    return 'darkTheme';
  }
  return 'lightTheme';
};
