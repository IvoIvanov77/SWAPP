import React from 'react';
import { shallow } from 'enzyme';
import StarshipList from './starships-list.component';

it('should render StarshipList component', () => {
  //   expect(shallow(<StarshipList />)).toMatchSnapshot();
});

describe('ChatactersList component', () => {
  let wrapper;
  const mockedStarships = [{ id: 1 }, { id: 2 }];

  beforeEach(() => {
    wrapper = shallow(<StarshipList starships={mockedStarships} />);
  });

  it('should render StarshipList component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render starships', () => {
    const starships = wrapper.find('div').children();
    expect(starships.length).toBe(mockedStarships.length);
  });
});
