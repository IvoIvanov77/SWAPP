import React from 'react';
import { Query } from 'react-apollo';
import { ggl } from 'apollo-boost';

const GET_EPISODE_BY_ID = ggl`
    query getEpisodeById($id: String!) {
        getEpisodeById(id: $id) {

        }
    }
`

const EpisodeDetailsContainer = ({ match }) => (
    <Query query={GET_EPISODE_BY_ID} variables={{id: match.params.episodeId }}>
        {
            ({ loading, error, data:{getEpisodeById} }) => {
                if (loading) {
                    return
                }
                return
            }
        }

    </Query>
)

export default EpisodesContainer;