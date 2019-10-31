import React from 'react';
import { Redirect } from 'react-router-dom';
import { useApolloClient } from '@apollo/react-hooks';

const ProcessError = ({ error }) => {
  console.log(error);
  const client = useApolloClient();
  client.writeData({ data: { authenticated: true } });
  localStorage.removeItem('token');

  return <Redirect to="/" />;
};

export default ProcessError;
