import React from 'react';
import { shallow } from 'enzyme';
import { MockedProvider } from '@apollo/react-testing';

import LogoutButton from './logout-button.container';
it('should render LogoutButton component', () => {
  expect(
    shallow(
      <MockedProvider>
        <LogoutButton />
      </MockedProvider>,
    ),
  ).toMatchSnapshot();
});
