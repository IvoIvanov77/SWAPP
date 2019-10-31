import React from 'react';
import { shallow } from 'enzyme';
import Character from './character.component';

it('should render Character component', () => {
  expect(shallow(<Character />)).toMatchSnapshot();
});
