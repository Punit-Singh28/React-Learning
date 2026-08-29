import React from 'react';
import { Form } from '../Components/Form';

export const Login = () => {
  const data = [
    {name: 'email', type: 'text' },
    {name: 'password', type: 'password' },
  ];

  return <Form fields={data} button={'login'} />;
};