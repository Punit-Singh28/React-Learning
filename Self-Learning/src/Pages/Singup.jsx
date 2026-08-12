import React from 'react'
import { Form } from '../Components/Form'
const Singup = () => {
    const data = [
        {id: 1, name: 'email', type: 'text'},
        {id: 2, name: 'password', type: 'password'},
        {id: 3, name: 'phone', type: 'phone'},
        {id: 4, name: 'address', type: 'address'},
        {id: 5, name: 'gender', type: 'radio'},
        {id: 6, name: 'city', type: 'city'},
        {id: 7, name: 'country', type: 'country'},
    ]
  return (
       <Form props={data} button={'Signup'}></Form>

  )
}

export default Singup
