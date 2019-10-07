import React from 'react';
import { Query } from 'react-apollo';
import { ggl } from 'apollo-boost';

const GET_EPISODES = ggl`
`

const EpisodesContainer = () => (
    <Query query={GET_EPISODES}>
        {
            ({ loading, error, data }) => {
                if(loading){
                    return
                }
                return 
            }
        }

    </Query>
)

export default EpisodesContainer;