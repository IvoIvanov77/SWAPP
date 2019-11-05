import React from 'react';
import { shallow } from 'enzyme';
import LoginPage from './login-page.component';

describe('LoginPage component', () => {
  let wrapper;
  let mockSignin;
  let preventDefault;
  let mockEvent;
  // let mockState
  const mockErrorMessage = 'error';

  beforeEach(() => {
    mockSignin = jest.fn();
    preventDefault = jest.fn();

    const mockProps = {
      errorMessage: mockErrorMessage,
      signin: mockSignin,
    };
    mockEvent = {
      preventDefault,
    };

    wrapper = shallow(<LoginPage {...mockProps} />);
  });

  it('should render LoginPage component', () => {
    console.log(wrapper.debug());
    expect(wrapper).toMatchSnapshot();
  });

  it('should call signin method when form is submited', () => {
    const loginForm = wrapper.find('LoginFormContainer');
    loginForm.simulate('submit', mockEvent);
    expect(mockSignin).toHaveBeenCalled();
  });

  it('should call preventDefault method when form is submited', () => {
    const loginForm = wrapper.find('LoginFormContainer');
    loginForm.simulate('submit', mockEvent);
    expect(preventDefault).toHaveBeenCalled();
  });

  it('should call setState method when form is submited', () => {
    const loginForm = wrapper.find('LoginFormContainer');
    const expected = {
      email: '',
      password: '',
    };
    loginForm.simulate('submit', mockEvent);
    expect(wrapper.state()).toEqual(expected);
  });

  it('should call setState on emial', () => {
    mockEvent = {
      target: {
        name: 'email',
        value: 'newEmail',
      },
    };
    const expected = {
      email: 'newEmail',
      password: '',
    };
    wrapper.instance().handleChange(mockEvent);

    expect(wrapper.state()).toEqual(expected);
  });

  it('should call setState on password', () => {
    mockEvent = {
      target: {
        name: 'password',
        value: 'mockPassword',
      },
    };
    const expected = {
      email: '',
      password: 'mockPassword',
    };
    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state()).toEqual(expected);
  });
});
