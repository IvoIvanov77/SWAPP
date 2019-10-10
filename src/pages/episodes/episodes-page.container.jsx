import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import EpisodesPage from './episodes-page.component';

const GET_EPISODES = gql`
  query {
    allEpisodes(first: 10) {
      edges {
        node {
          id
          episodeId
          title
          openingCrawl
          image
        }
      }
    }
  }
`;

const EpisodesContainer = () => {
  const { loading, error, data } = useQuery(GET_EPISODES);

  if (loading) {
    return <h1>Loading.......</h1>;
  }
  if (error) {
    return <h1>Error page</h1>;
  }
  if (data) {
    const edges = data.allEpisodes.edges;
    const episodes = edges.map(e => e.node);
    return <EpisodesPage episodes={episodes} />;
  }
};

export default EpisodesContainer;
