import React from 'react';

import FormInput from '../../components/input/input.component';
import CustomButton from '../../components/button/button.component';
import {
  LoginPageContainer,
  LoginPageTitleContainer,
  LoginFormContainer,
  FormInputsContainer,
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
    return (
      <LoginPageContainer>
        <LoginPageTitleContainer>swapp</LoginPageTitleContainer>
        <LoginFormContainer onSubmit={this.handleSubmit}>
          <FormInputsContainer>
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
            <div className="buttons">
              <CustomButton type="submit">Login</CustomButton>
            </div>
          </FormInputsContainer>
        </LoginFormContainer>
      </LoginPageContainer>
    );
  }
}

export default LoginPage;
