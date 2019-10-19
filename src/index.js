import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { setContext } from 'apollo-link-context';
import { typeDefs, resolvers } from './graphql/resolvers';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { GlobalStyle } from './GlobalStyles';
import ApplicationThemeProvider from './ApplicationThemeProvider';

const httpLink = createHttpLink({
  uri: 'http://softuni-swapp-212366186.eu-west-1.elb.amazonaws.com/graphql',
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

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  typeDefs,
  resolvers,
});

const storedColorTheme = localStorage.getItem('colorTheme');

client.writeData({
  data: {
    colorTheme: storedColorTheme ? storedColorTheme : 'lightTheme',
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
