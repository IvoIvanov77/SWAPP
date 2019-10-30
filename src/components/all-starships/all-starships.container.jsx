import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import { getStarshipStatistic } from '../../util/starshipStatistic';

import StarshipList from '../starships-list/starships-list.component';

const ALL_STARSHIPS = gql`
  query AllStarships($class: String) {
    allStarships(first: 100, filter: { starshipClass: $class }) {
      edges {
        node {
          id
          name
          model
          image
          starshipClass
          cost
          maxAtmosphericSpeed
          maxMLPerHour
          hyperdriveRating
          crew
        }
      }
      totalCount
    }
  }
`;

const AllStarshipsContainer = starship => {
  const { loading, error, data } = useQuery(ALL_STARSHIPS, {
    variables: { class: 'starfighter' },
  });

  if (loading) {
    return <h1>Loading.......</h1>;
  }
  if (error) {
    return <h1>Error page</h1>;
  }
  if (data) {
    console.log(data);
    const edges = data.allStarships.edges;
    const starships = edges.map(e => e.node);
    const first = starships[0];

    const compared = getStarshipStatistic(first, starships);

    console.log(compared);
    return <StarshipList starships={starships} />;
  }
};

export default AllStarshipsContainer;
