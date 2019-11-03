import React from 'react';
import { shallow } from 'enzyme';
import StarshipDetailsPage from './starship-details-page.component';

describe('StarshipDetailsPage component', () => {
  let wrapper;
  let mockStarship;
  const mockName = 'name';
  const mockModel = 'model';

  beforeEach(() => {
    mockStarship = {
      model: mockModel,
      name: mockName,
    };

    wrapper = shallow(<StarshipDetailsPage starship={mockStarship} />);
  });

  it('should render StarshipDetailsPage component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render starship name', () => {
    const characterName = wrapper.find('StarshipName');
    expect(characterName.text()).toBe(mockName);
  });

  it('should render starship model', () => {
    const starshipModel = wrapper.find('StarshipModel');
    expect(starshipModel.text()).toBe(`(${mockModel})`);
  });

  it('should render radar chart', () => {
    const radarChart = wrapper.find('RadarChartContainer');
    expect(radarChart.prop('starship')).toBe(mockStarship);
  });
});
