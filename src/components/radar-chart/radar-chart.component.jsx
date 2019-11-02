import React from 'react';
import Radar from 'react-d3-radar';

import { ChartContainer, TitleContainer } from './radar-chart.styles';

const RadarChart = ({ statistic }) => {
  return (
    <>
      <TitleContainer>Compared to Strarship Class Max</TitleContainer>
      <ChartContainer>
        <Radar
          width={500}
          height={500}
          padding={70}
          domainMax={100}
          highlighted={null}
          // onHover={point => {
          //   if (point) {
          //     console.log('hovered over a data point');
          //   } else {
          //     console.log('not over anything');
          //   }
          // }}
          data={{
            variables: [
              { key: 'maxAtmosphericSpeed', label: 'Max Atm. Speed' },
              { key: 'maxMLPerHour', label: 'Max ML/h' },
              { key: 'hyperdriveRating', label: 'HyperD Rat.' },
              { key: 'crew', label: 'Crew' },
              { key: 'cost', label: 'Cost' },
            ],
            sets: [
              {
                key: 'starship',
                label: 'Starship Scores',
                values: statistic,
              },
            ],
          }}
        />
      </ChartContainer>
    </>
  );
};

export default RadarChart;
