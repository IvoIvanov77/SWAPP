import React from 'react';
import { shallow } from 'enzyme';
import Episode from './episode.component';

it('should render Episode component', () => {
  expect(shallow(<Episode />)).toMatchSnapshot();
});
