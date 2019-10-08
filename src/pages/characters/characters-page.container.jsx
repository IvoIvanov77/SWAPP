import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import CharactersPage from './characters-page.component';

const GET_CHARACTERS = gql`
  query {
    allPeople(first: 6) {
      edges {
        node {
          id
          name
          image
        }
      }
    }
  }
`;

const CharactersContainer = () => (
  <Query query={GET_CHARACTERS}>
    {({ loading, error, data }) => {
      let characters = [];
      if (loading) {
        return <h1>Loading...............</h1>;
      }
      if (data) {
        console.log(data);
        const edges = data.allPeople.edges;
        characters = edges.map(e => e.node);
      }
      return <CharactersPage characters={characters} />;
    }}
  </Query>
);

export default CharactersContainer;
