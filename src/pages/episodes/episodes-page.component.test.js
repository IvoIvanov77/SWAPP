import React from 'react';
import { shallow } from 'enzyme';
import EpisodesPage from './episodes-page.component';

describe('EpisodesPage component', () => {
  let wrapper;
  const mockedPages = [{ id: 1 }, { id: 2 }];

  beforeEach(() => {
    wrapper = shallow(<EpisodesPage episodes={mockedPages} />);
  });

  it('should render EpisodesPage component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render episodes', () => {
    const episodes = wrapper.find('EpisodesOverview').children();
    expect(episodes.length).toBe(mockedPages.length);
  });
});
