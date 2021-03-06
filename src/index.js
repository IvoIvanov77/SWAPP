import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { GlobalStyle } from './GlobalStyles';
import ApplicationThemeProvider from './ApplicationThemeProvider';
import client from './graphql/client';
import './fonts/fonts.css';

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
