import React from 'react';
import { shallow } from 'enzyme';
import StarshipInfo from './starship-info.component';

it('should render StarshipInfo component', () => {
  //   expect(shallow(<StarshipInfo />)).toMatchSnapshot();
});

describe('StarshipInfo component', () => {
  let wrapper;
  let starshipFields;
  const name = 'name';
  const image = 'image';
  const starshipClass = 'starshipClass';
  const cost = 'cost';
  const maxAtmosphericSpeed = 'maxAtmosphericSpeed';
  const hyperdriveRating = 'hyperdriveRating';
  const crew = 'crew';

  beforeEach(() => {
    const mockStarship = {
      name,
      image,
      starshipClass,
      cost,
      maxAtmosphericSpeed,
      hyperdriveRating,
      crew,
    };
    wrapper = shallow(<StarshipInfo starship={mockStarship} />);
    starshipFields = wrapper.find('StarshipInfoFields');
  });

  it('should render StarshipInfo component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should pass image to StarshipImage as the prop src', () => {
    expect(wrapper.find('StarshipImage').prop('src')).toBe(image);
  });

  it('should StarshipName text match to starship name', () => {
    expect(wrapper.find('StarshipName').text()).toBe(name);
  });

  it('should StarshipInfoFields first child to contains starshipClass field', () => {
    expect(
      starshipFields
        .childAt(0)
        .find('span')
        .text(),
    ).toBe(starshipClass);
  });

  it('should StarshipInfoFields second child to contains cost field', () => {
    expect(
      starshipFields
        .childAt(1)
        .find('span')
        .text(),
    ).toBe(cost);
  });

  it('should StarshipInfoFields third child to contains crew field', () => {
    expect(
      starshipFields
        .childAt(2)
        .find('span')
        .text(),
    ).toBe(crew);
  });

  it('should StarshipInfoFields fourth child to contains maxAtmosphericSpeed field', () => {
    expect(
      starshipFields
        .childAt(3)
        .find('span')
        .text(),
    ).toBe(maxAtmosphericSpeed);
  });

  it('should StarshipInfoFields fourth child to contains maxAtmosphericSpeed field', () => {
    expect(
      starshipFields
        .childAt(3)
        .find('span')
        .text(),
    ).toBe(maxAtmosphericSpeed);
  });

  it('should StarshipInfoFields fifth child to contains hyperdriveRating field', () => {
    expect(
      starshipFields
        .childAt(4)
        .find('span')
        .text(),
    ).toBe(hyperdriveRating);
  });
});
