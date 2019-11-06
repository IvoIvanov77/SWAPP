import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import CharacterDetaislPage from './character-details-page.component';
import Spinner from '../../components/spinner/spinner.component';
import ProcessError from '../../components/error/error.container';

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
    return <Spinner />;
  }
  if (error) {
    return <ProcessError />;
  }
  if (data) {
    const { person } = data;
    person.starships = person.starships.edges.map(e => e.node);
    return <CharacterDetaislPage person={person} />;
  }
};

export default CharacterDetailsContainer;
