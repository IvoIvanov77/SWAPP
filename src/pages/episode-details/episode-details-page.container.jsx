import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import EpisodeDetaislPage from './episode-details-page.component';
import Spinner from '../../components/spinner/spinner.component';
import ProcessError from '../../components/error/error.component';

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
    variables: { id: match.params.id, first: 6 },
  });

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <ProcessError error={error} />;
  }

  const { episode } = data;
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
        const data = {
          episode: {
            ...episode,
            people: {
              ...episode.people,
              edges: [...prev.episode.people.edges, ...episode.people.edges],
            },
          },
        };
        return data;
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
