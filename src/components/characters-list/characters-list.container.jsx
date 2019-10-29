import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import CharactersList from './characters-list.component';

const GET_CHARACTERS = gql`
  query AllPeople($first: Int!, $after: String) {
    allPeople(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
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

const CharactersListContainer = ({ initialCount }) => {
  const { loading, error, data, fetchMore } = useQuery(GET_CHARACTERS, {
    variables: { first: initialCount },
  });
  let characters = [];

  if (loading) {
    return <h1>Loading .....</h1>;
  }
  if (error) {
    return <h1>Error page</h1>;
  }
  const {
    allPeople: {
      edges,
      pageInfo: { hasNextPage, endCursor },
    },
  } = data;

  characters = edges.map(e => e.node);
  const loadMore = () => {
    fetchMore({
      variables: {
        after: endCursor,
      },
      updateQuery: (prev, { fetchMoreResult: { allPeople } }) => {
        if (!allPeople.edges.length) {
          return prev;
        }

        return {
          allPeople: {
            ...allPeople,
            edges: [...prev.allPeople.edges, ...allPeople.edges],
          },
        };
      },
    });
  };
  return (
    <div>
      <CharactersList
        characters={characters}
        fetchMore={loadMore}
        hasNextPage={hasNextPage}
      />
    </div>
  );
};

export default CharactersListContainer;
