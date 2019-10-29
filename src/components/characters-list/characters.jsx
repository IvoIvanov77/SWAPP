import React from 'react';

import CharactersList from './characters-list.component';

const Characters = ({ fetchMore, people }) => {
  const {
    edges,
    pageInfo: { hasNextPage, endCursor },
  } = people;

  const characters = edges.map(e => e.node);
  const loadMore = () => {
    console.log(people);
    fetchMore({
      variables: {
        after: endCursor,
      },
      updateQuery: (prev, { fetchMoreResult: { people } }) => {
        console.log(people);
        if (!people.edges.length) {
          return prev;
        }

        return {
          people: {
            ...people,
            edges: [...prev.people.edges, ...people.edges],
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

export default Characters;
