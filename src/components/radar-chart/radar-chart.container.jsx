import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import {
  getMaxValues,
  getStarshipStatistic,
} from '../../util/starshipStatistic';
import RadarChart from './radar-chart.component';
import Spinner from '../spinner/spinner.component';
import ProcessError from '../error/error.component';

const ALL_STARSHIPS = gql`
  query AllStarships($class: String) {
    allStarships(first: 100, filter: { starshipClass: $class }) {
      edges {
        node {
          id
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
      totalCount
    }
  }
`;

const RadarChartContainer = ({ starship }) => {
  const { loading, error, data } = useQuery(ALL_STARSHIPS, {
    variables: { class: starship.starshipClass },
  });

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <ProcessError error={error} />;
  }
  if (data) {
    const edges = data.allStarships.edges;
    const starships = edges.map(e => e.node);
    const maxValues = getMaxValues(starships);
    const statistic = getStarshipStatistic(starship, maxValues);
    return <RadarChart statistic={statistic} />;
  }
};

export default RadarChartContainer;
