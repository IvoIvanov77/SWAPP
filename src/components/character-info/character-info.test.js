import React from 'react';
import { shallow } from 'enzyme';
import CharacterInfo from './character-info.component';

describe('CharacterInfo component', () => {
  let wrapper;
  const name = 'name';
  const image = 'image';
  const height = '100';
  const homeworld = { name: 'homeworld' };
  const species = { name: 'species' };

  beforeEach(() => {
    const person = {
      name,
      image,
      height,
      homeworld,
      species,
    };
    wrapper = shallow(<CharacterInfo person={person} />);
  });

  it('should render CharacterInfo component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should pass image to CharacterImage as the prop src', () => {
    expect(wrapper.find('CharacterImage').prop('src')).toBe(image);
  });

  it('should element contains person fields', () => {
    expect(wrapper.find('CharacterName').text()).toBe(name);
    expect(
      wrapper
        .find('span')
        .at(0)
        .text(),
    ).toBe(height);
    expect(
      wrapper
        .find('span')
        .at(1)
        .text(),
    ).toBe(species.name);
    expect(
      wrapper
        .find('span')
        .at(2)
        .text(),
    ).toBe(homeworld.name);
  });
});
