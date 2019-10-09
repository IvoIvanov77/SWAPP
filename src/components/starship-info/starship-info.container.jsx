import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
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

const StarshipInfoContainer = ({ starshipId }) => (
  <Query query={GET_STARSHIP_BY_ID} variables={{ id: starshipId }}>
    {({ loading, error, data }) => {
      if (loading) {
        return <h1>Loading.......</h1>;
      }
      if (data) {
        console.log(data);
        const { starship } = data;
        return <StarshipInfo starship={starship} />;
      }
      if (error) {
        console.log(starshipId);
        console.log(data);
        console.log(error);
      }
    }}
  </Query>
);

export default StarshipInfoContainer;
