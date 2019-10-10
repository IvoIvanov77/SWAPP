import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import StarshipInfo from './starship-info.component';

const GET_STARSHIP_BY_ID = gql`
  query Starship($id: ID!) {
    starship(id: $id) {
      name
      image
      starshipClass
      cost
      maxAtmosphericSpeed
      hyperdriveRating
      crew
    }
  }
`;

const StarshipInfoContainer = ({ starshipId }) => {
  const { loading, error, data } = useQuery(GET_STARSHIP_BY_ID, {
    variables: { id: starshipId },
  });

  if (loading) {
    return <h1>Loading.......</h1>;
  }
  if (error) {
    return <h1>Error page</h1>;
  }
  if (data) {
    const { starship } = data;
    return <StarshipInfo starship={starship} />;
  }
};

export default StarshipInfoContainer;
