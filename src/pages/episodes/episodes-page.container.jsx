import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import EpisodesPage from './episodes-page.component';
import Spinner from '../../components/spinner/spinner.component';
import ProcessError from '../../components/error/error.container';

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
    return <Spinner />;
  }
  if (error) {
    return <ProcessError />;
  }
  if (data) {
    const edges = data.allEpisodes.edges;
    const episodes = edges.map(e => e.node);
    return <EpisodesPage episodes={episodes} />;
  }
};

export default EpisodesContainer;
