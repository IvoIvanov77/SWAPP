import React from 'react';
import { default as LoginPage } from '../../pages/login/login-page.container';

const ProcessError = ({ error }) => {
  return <LoginPage errorMessage={error.message} />;
};

export default ProcessError;
