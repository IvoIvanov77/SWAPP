import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

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

const CharacterDetailsContainer = ({ match }) => {
  const { loading, error, data } = useQuery(GET_CHARACTER_BY_ID, {
    variables: { id: match.params.id },
  });

  if (loading) {
    return <h1>Loading.......</h1>;
  }
  if (error) {
    return <h1>Error page</h1>;
  }
  if (data) {
    const { person } = data;
    return <CharacterDetaislPage person={person} />;
  }
};

export default CharacterDetailsContainer;
