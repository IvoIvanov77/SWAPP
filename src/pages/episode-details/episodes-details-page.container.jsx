import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
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

const EpisodeDetailsContainer = ({ match }) => (
  <Query query={GET_EPISODE_BY_ID} variables={{ id: match.params.id }}>
    {({ loading, error, data }) => {
      if (loading) {
        return <h1>Loading.......</h1>;
      }
      if (data) {
        const { episode } = data;
        return <EpisodeDetaislPage episode={episode} />;
      }
    }}
  </Query>
);

export default EpisodeDetailsContainer;
