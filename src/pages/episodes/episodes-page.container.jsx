import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

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

const EpisodesContainer = () => (
  <Query query={GET_EPISODES}>
    {({ loading, error, data }) => {
      let episodes = [];
      if (loading) {
        return <h1>Loading...............</h1>;
      }
      if (data) {
        const edges = data.allEpisodes.edges;
        episodes = edges.map(e => e.node);
      }
      return <EpisodesPage episodes={episodes} />;
    }}
  </Query>
);

export default EpisodesContainer;
