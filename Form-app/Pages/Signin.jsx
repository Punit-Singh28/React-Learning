import React from 'react';
import { Form } from '../Components/Form';

export const Signin = () => {
  const data = [
    {name:'name', type:'text'},
    {name:'password', type:'password'}
  ];
  return (
    <>
      <h1>This is Sign in Page</h1>
      <Form props={data} button={'Login'} />
    </>
  )
}

