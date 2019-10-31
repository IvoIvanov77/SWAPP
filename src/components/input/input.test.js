import React from 'react';
import { shallow } from 'enzyme';
import FormInput from './input.component';

it('should render FormInput component', () => {
  expect(shallow(<FormInput />)).toMatchSnapshot();
});
