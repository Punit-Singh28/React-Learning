import React from "react";
import { useDispatch } from "react-redux";
import { todo_created } from "../Store/Todo/ActionTypes";

const TodoInput = () => {
  const inputVal = React.useRef(null);
  const dispatch = useDispatch();

  const handleAdd = () => {
    const text = inputVal.current.value;
    dispatch(todo_created(text));
  };

  return (
    <>
      <input type="text" ref={inputVal} />
      <button onClick={handleAdd}>Add</button>
    </>
  );
};

export default TodoInput;
