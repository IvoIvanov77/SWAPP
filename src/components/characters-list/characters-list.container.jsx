import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import CharactersList from './characters-list.component';

const GET_CHARACTERS = gql`
  query AllPeople($first: Int!, $after: String) {
    allPeople(first: $first, after: $after) {
      edges {
        node {
          id
          name
          image
        }
        cursor
      }
    }
  }
`;

const CharactersListContainer = ({ initialCount }) => {
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { first: initialCount },
  });
  let characters = [];

  if (loading) {
    return <h1>Loading .....</h1>;
  }
  if (error) {
    return <h1>Error page</h1>;
  }

  if (data) {
    const edges = data.allPeople.edges;
    characters = edges.map(e => e.node);
    return (
      <div>
        <CharactersList characters={characters} />
      </div>
    );
  }
};

export default CharactersListContainer;
