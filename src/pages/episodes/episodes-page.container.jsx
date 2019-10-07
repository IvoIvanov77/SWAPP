import React from 'react';
// import { Query } from 'react-apollo';
// import { gql } from 'apollo-boost';

import EpisodesPage from './episodes-page.component';

// const GET_EPISODES = gql`
//     allEpisodes {
//         id
//         title
//     }
// `

const EpisodesContainer = () => (
  // <Query query={}>
  //     {
  //         ({ loading, error, data }) => {
  //             if(loading){
  //                 return
  //             }
  //             console.log(data)
  //             return <EpisodesPage/>
  //         }
  //     }
  // </Query>
  <EpisodesPage />
);

export default EpisodesContainer;
