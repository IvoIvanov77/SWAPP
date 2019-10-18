import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import EpisodeDetaislPage from './episode-details-page.component';

const GET_EPISODE_BY_ID = gql`
  query Episode($id: ID!) {
    episode(id: $id) {
      id
      title
      episodeId
      openingCrawl
      image
      director
      releaseDate
    }
  }
`;

const EpisodeDetailsContainer = ({ match }) => {
  const { loading, error, data } = useQuery(GET_EPISODE_BY_ID, {
    variables: { id: match.params.id },
  });

  if (loading) {
    return <h1>Loading.......</h1>;
  }
  if (error) {
    return <h1>Error page</h1>;
  }
  if (data) {
    const { episode } = data;
    return <EpisodeDetaislPage episode={episode} />;
  }
};

export default EpisodeDetailsContainer;
