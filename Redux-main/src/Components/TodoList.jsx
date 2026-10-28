import React from 'react'
import { useSelector } from 'react-redux'

const TodoList = () => {
  const data = useSelector(store=>store.todo)
  console.log("TodoList DATA: ", data);
  
  return (
    <>
      <h1>TODO</h1>
    </>
  )
}

export default TodoList
