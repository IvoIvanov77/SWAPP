import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import StarshipDetailsPage from './starship-details-page.component';

const GET_STARSHIP_BY_ID = gql`
  query Starship($id: ID!) {
    starship(id: $id) {
      name
      model
      image
      starshipClass
      cost
      maxAtmosphericSpeed
      hyperdriveRating
      crew
    }
  }
`;

const StarshipDetailsPageContainer = ({ match }) => {
  const { loading, error, data } = useQuery(GET_STARSHIP_BY_ID, {
    variables: { id: match.params.starshipId },
  });

  if (loading) {
    return <h1>Loading.......</h1>;
  }
  if (error) {
    return <h1>Error page</h1>;
  }
  if (data) {
    const { starship } = data;
    return <StarshipDetailsPage starship={starship} />;
  }
};

export default StarshipDetailsPageContainer;
