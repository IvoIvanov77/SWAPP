import React from 'react';
import { shallow } from 'enzyme';
import Starchip from './starship.component';

it('should render Starchip component', () => {
  expect(shallow(<Starchip />)).toMatchSnapshot();
});
