import React from 'react';

import FormInput from '../../components/input/input.component';
import CustomButton from '../../components/button/button.component';
import ChangeTheme from '../../components/change-theme/change-theme.container';
import {
  LoginPageContainer,
  LoginPageTitleContainer,
  LoginFormContainer,
  FormInputsContainer,
  FormButtonContainer,
  ErrorMessage,
} from './login-page.styles';

class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    const { signin } = this.props;
    localStorage.setItem('token', '');
    signin(email, password);
    this.setState({ email: '', password: '' });
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { errorMessage } = this.props;
    return (
      <LoginPageContainer>
        <LoginPageTitleContainer>
          <ChangeTheme>SWAPP</ChangeTheme>
        </LoginPageTitleContainer>
        <LoginFormContainer onSubmit={this.handleSubmit}>
          <FormInputsContainer>
            <ErrorMessage>{errorMessage}</ErrorMessage>
            <FormInput
              name="email"
              type="email"
              handleChange={this.handleChange}
              value={this.state.email}
              label="email"
              required
            />
            <FormInput
              name="password"
              type="password"
              value={this.state.password}
              handleChange={this.handleChange}
              label="password"
              required
            />
            <FormButtonContainer>
              <CustomButton type="submit">Login</CustomButton>
            </FormButtonContainer>
          </FormInputsContainer>
        </LoginFormContainer>
      </LoginPageContainer>
    );
  }
}

export default LoginPage;
