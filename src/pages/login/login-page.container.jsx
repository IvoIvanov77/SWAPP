import React from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

import LoginPage from './login-page.component';

const SIGNIN_USER = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
    }
  }
`;

const LoginPageContainer = () => (
  <Mutation mutation={SIGNIN_USER}>
    {(signIn, { loading, error, data }) => {
      if (loading) {
        return <h1>Loading...............</h1>;
      }
      console.log(data);
      if (data) {
        const token = data.signIn.token;
        console.log(token);
        localStorage.setItem('token', token);
      }

      return (
        <LoginPage
          signin={(email, password) =>
            signIn({ variables: { email, password } })
          }
        />
      );
    }}
  </Mutation>
);

export default LoginPageContainer;
