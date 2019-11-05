import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import StarshipDetailsPage from './starship-details-page.component';
import Spinner from '../../components/spinner/spinner.component';
import ProcessError from '../../components/error/error.container';

const GET_STARSHIP_BY_ID = gql`
  query Starship($id: ID!) {
    starship(id: $id) {
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
`;

const StarshipDetailsPageContainer = ({ match }) => {
  const { loading, error, data } = useQuery(GET_STARSHIP_BY_ID, {
    variables: { id: match.params.starshipId },
  });

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <ProcessError error={error} />;
  }
  if (data) {
    const { starship } = data;
    return <StarshipDetailsPage starship={starship} />;
  }
};

export default StarshipDetailsPageContainer;
