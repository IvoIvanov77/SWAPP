import React from 'react';
import { shallow } from 'enzyme';
import ProcessError from './error.container';
import { MockedProvider } from '@apollo/react-testing';

it('should render ProcessError component', () => {
  expect(
    shallow(
      <MockedProvider>
        <ProcessError />
      </MockedProvider>,
    ),
  ).toMatchSnapshot();
});
