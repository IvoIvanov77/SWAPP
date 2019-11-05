import React from 'react';
import { shallow } from 'enzyme';
import CharactersPage from './characters-page.component';

describe('CharactersPage component', () => {
  const wrapper = shallow(<CharactersPage />);

  it('should render CharactersPage component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render characters list', () => {
    expect(wrapper.exists('CharactersListContainer')).toBe(true);
  });
});
