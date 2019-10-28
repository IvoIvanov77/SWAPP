import React from 'react';
import Radar from 'react-d3-radar';

import { ChartContainer, TitleContainer } from './radar-chart.styles';

const RadarChart = () => {
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
          onHover={point => {
            if (point) {
              console.log('hovered over a data point');
            } else {
              console.log('not over anything');
            }
          }}
          data={{
            variables: [
              { key: 'resilience', label: 'Max Atm. Speed' },
              { key: 'strength', label: 'Max ML/h' },
              { key: 'adaptability', label: 'HyperD Rat.' },
              { key: 'creativity', label: 'Crew' },
              { key: 'openness', label: 'Cost' },
            ],
            sets: [
              {
                key: 'me',
                label: 'My Scores',
                values: {
                  resilience: 4,
                  strength: 6,
                  adaptability: 7,
                  creativity: 2,
                  openness: 8,
                },
              },
            ],
          }}
        />
      </ChartContainer>
    </>
  );
};

export default RadarChart;
