import React from 'react';
import { shallow } from 'enzyme';
import RadarChart from './radar-chart.component';

describe('Episode component', () => {
  let wrapper;
  const mockShip = {
    cost: '100',
    crew: '5',
    hyperdriveRating: '9',
    maxAtmosphericSpeed: '1000',
    maxMLPerHour: '200',
  };

  beforeEach(() => {
    wrapper = shallow(<RadarChart statistic={mockShip} />);
  });

  it('should render Episode component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match cost value', () => {
    const actualCost = wrapper.find('Radar').prop('data').sets[0].values.cost;
    expect(actualCost).toBe(mockShip.cost);
  });

  it('should match crew value', () => {
    const actualCost = wrapper.find('Radar').prop('data').sets[0].values.crew;
    expect(actualCost).toBe(mockShip.crew);
  });

  it('should match hyperdriveRating value', () => {
    const actualCost = wrapper.find('Radar').prop('data').sets[0].values
      .hyperdriveRating;
    expect(actualCost).toBe(mockShip.hyperdriveRating);
  });

  it('should match maxAtmosphericSpeed value', () => {
    const actualCost = wrapper.find('Radar').prop('data').sets[0].values
      .maxAtmosphericSpeed;
    expect(actualCost).toBe(mockShip.maxAtmosphericSpeed);
  });

  it('should match maxMLPerHour value', () => {
    const actualCost = wrapper.find('Radar').prop('data').sets[0].values
      .maxMLPerHour;
    expect(actualCost).toBe(mockShip.maxMLPerHour);
  });
});
