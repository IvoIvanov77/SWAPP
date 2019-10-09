import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import CharacterDetaislPage from './character-details-page.component';

const GET_CHARACTER_BY_ID = gql`
  query Person($id: ID!) {
    person(id: $id) {
      name
      image
      height
      homeworld {
        name
      }
      species {
        name
      }
      starships {
        edges {
          node {
            id
            name
            image
          }
        }
      }
    }
  }
`;

const CharacterDetailsContainer = ({ match }) => (
  <Query query={GET_CHARACTER_BY_ID} variables={{ id: match.params.id }}>
    {({ loading, error, data }) => {
      if (loading) {
        return <h1>Loading.......</h1>;
      }
      if (data) {
        console.log(data);
        const { person } = data;
        return <CharacterDetaislPage person={person} />;
      }
    }}
  </Query>
);

export default CharacterDetailsContainer;
