import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';

import { GRAPHQL_SERVER_URL } from '../util/constants';
import authLink from './auth-context';
import { typeDefs, resolvers } from './resolvers';
import initialData from './initial-state';

const httpLink = createHttpLink({
  uri: GRAPHQL_SERVER_URL,
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  typeDefs,
  resolvers,
});

client.writeData({
  data: initialData,
});

export default client;
