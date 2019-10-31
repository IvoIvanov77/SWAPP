import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';
import { typeDefs, resolvers } from './graphql/resolvers';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { GlobalStyle } from './GlobalStyles';
import ApplicationThemeProvider from './ApplicationThemeProvider';
import './fonts/fonts.css';

const httpLink = createHttpLink({
  uri: 'https://swapp.st6.io/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  }
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: authLink.concat(errorLink).concat(httpLink),
  cache,
  typeDefs,
  resolvers,
});

const storedColorTheme = localStorage.getItem('colorTheme');

client.writeData({
  data: {
    colorTheme: storedColorTheme ? storedColorTheme : 'lightTheme',
    isSessionExpired: false,
    authenticated: !!localStorage.getItem('token'),
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <ApplicationThemeProvider>
        <App />
        <GlobalStyle />
      </ApplicationThemeProvider>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
