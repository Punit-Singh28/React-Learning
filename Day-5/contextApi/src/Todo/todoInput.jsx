import React from "react";
import { TodoComponentsContext } from "../Context/TodoCotext";
import { TodoContextScope } from "../Context/TodoCotext";
import * as actionTypes from "../Reducer/Action";
export const TodoInput = () => {
  const { state, dispatch } = React.useContext(TodoContextScope);
  const [text, setText] = React.useState("");

  //   const handleAddTodo = () => {
  //     if (text.trim() === '') return;

  //     const todoData = {
  //       id: Date.now(),
  //       text: text,
  //       isEdits: false,
  //       isComplete: false,
  //     };
  //     setTodo((prev) => {
  //       console.log(prev);
  //       return [...prev, todoData];
  //     });
  //     setText('');
  //   };
  //   console.log(`🚀 ~ todo:`, todo);

  const handleAddTodo = () => {
    dispatch({ type: actionTypes.TODO_CREATE, payload: text });
    setText("");
  };

  console.log(`🚀 ~ state:`, state);
  return (
    <div>
      <input
        value={text}
        type="text"
        placeholder="enter your todo.."
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddTodo}>add</button>
    </div>
  );
};
