import React from 'react'
import { Form } from '../Components/Form'

const Login = () => {
    const data = [
        {id: 1, name: 'email', type: 'text'},
        {id: 2, name: 'password', type: 'password'},
    ]
  return (
    <Form props={data} button={'login'}></Form>
  )
}

export default Login
