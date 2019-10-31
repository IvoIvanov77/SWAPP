import React from 'react';
import { shallow } from 'enzyme';
import RadarChart from './radar-chart.component';

it('should render RadarChart component', () => {
  expect(shallow(<RadarChart />)).toMatchSnapshot();
});
