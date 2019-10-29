import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import EpisodeDetaislPage from './episode-details-page.component';

const GET_EPISODE_BY_ID = gql`
  query Episode($id: ID!, $first: Int!, $after: String) {
    episode(id: $id) {
      id
      title
      episodeId
      openingCrawl
      image
      director
      releaseDate
      people(first: $first, after: $after) {
        edges {
          node {
            id
            name
            image
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
`;

const EpisodeDetailsContainer = ({ match }) => {
  const { loading, error, data, fetchMore } = useQuery(GET_EPISODE_BY_ID, {
    variables: { id: match.params.id, first: 5 },
  });

  if (loading) {
    return <h1>Loading.......</h1>;
  }
  if (error) {
    return <h1>Error page</h1>;
  }

  const { episode } = data;
  console.log(data);
  const {
    people: {
      edges,
      pageInfo: { hasNextPage, endCursor },
    },
  } = episode;

  const characters = edges.map(e => e.node);
  const loadMore = () => {
    fetchMore({
      variables: {
        after: endCursor,
      },
      updateQuery: (prev, { fetchMoreResult: { episode } }) => {
        if (!episode.people.edges.length) {
          return prev;
        }
        // console.log(prev.episode)
        return {
          episode: {
            ...episode,
          },
          people: {
            ...episode.people,
            edges: [...prev.episode.people.edges, episode.people.edges],
          },
        };
      },
    });
  };
  return (
    <EpisodeDetaislPage
      episode={episode}
      characters={characters}
      fetchMore={loadMore}
      hasNextPage={hasNextPage}
    />
  );
};

export default EpisodeDetailsContainer;
