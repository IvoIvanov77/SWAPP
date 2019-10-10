import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import CharactersList from './characters-list.component';

const GET_CHARACTERS = gql`
  query AllPeople($first: Int!, $after: String) {
    allPeople(first: $first, after: $after) {
      edges {
        node {
          id
          name
          image
        }
        cursor
      }
    }
  }
`;

class CharactersListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charactersList: [],
      after: undefined,
      loading: true,
    };
  }

  componentDidMount() {
    const { initialCount } = this.props;
    const { after, charactersList } = this.state;
    return (
      <Query
        query={GET_CHARACTERS}
        variables={{ first: initialCount, after: after }}
      >
        {({ loading, error, data }) => {
          let characters = [];
          if (loading) {
            this.setState({
              loading,
            });
          }
          if (data) {
            console.log(data);
            const edges = data.allPeople.edges;
            characters = edges.map(e => e.node);
            this.setState({
              charactersList: [...charactersList, characters],
            });
          }
        }}
      </Query>
    );
  }
  render() {
    const { loading, charactersList } = this.state;
    if (loading) {
      return <h1>Loading........</h1>;
    }

    return <CharactersList characters={charactersList} />;
  }
}

export default CharactersListContainer;
