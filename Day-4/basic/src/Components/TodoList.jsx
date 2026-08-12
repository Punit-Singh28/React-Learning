import React from "react";
import { TodoInput } from "./TodoInput";
import { TodoData } from "../Context/TodoComponentContext";

export const TodoList = () => {
  const { todo, setTodo } = React.useContext(TodoData);
  const handleDelete = (id) => {
    setTodo((prev) => prev.filter((e) => e.id !== id));
  };

 const handleEdit = (id) => {
    setTodo((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <div>
      {todo.map((e) => (
        <p key={e.id}>
          {e.text} <button onClick={() => handleDelete(e.id)}>Delete</button>
          <button onClick={() => handleEdit(e.id)}>Edit</button>
        </p>
      ))}
    </div>
  );
};
