import React from 'react';
import { shallow } from 'enzyme';
import Starchip from './starship.component';

it('should render Starchip component', () => {
  expect(shallow(<Starchip />)).toMatchSnapshot();
});

describe('Episode component', () => {
  let wrapper;
  const linkUrl = '10';
  const name = 'name';
  const image = 'image';

  beforeEach(() => {
    const mockProps = {
      image,
      name,
      linkUrl,
    };
    wrapper = shallow(<Starchip {...mockProps} />);
  });

  it('should render Starchip component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should pass linkUrl to Link compoment', () => {
    expect(wrapper.find('Link').prop('to')).toBe(`/starships/${linkUrl}`);
  });

  it('should pass image to StarshipImage as the prop src', () => {
    expect(wrapper.find('StarshipImage').prop('src')).toBe(image);
  });

  it('should pass h3 element to StarshipNameContainer', () => {
    expect(
      wrapper
        .find('StarshipNameContainer')
        .childAt(0)
        .type(),
    ).toBe('h3');
  });

  it('should pass name to StarshipNameContainer first child', () => {
    expect(
      wrapper
        .find('StarshipNameContainer')
        .childAt(0)
        .text(),
    ).toBe(name);
  });
});
