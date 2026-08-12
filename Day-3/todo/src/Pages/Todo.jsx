import React from 'react';
import { Todo_list } from '../Components/Todo_list';
import { Todo_input } from '../Components/Todo_input';


export const Todo = () =>{
    const [todo, setTodo] = React.useState([]);
    return(
        <>
        <Todo_input props={setTodo} />
      <Todo_list props={{ todo, setTodo }} />
        </>

    )
}