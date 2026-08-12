import React from "react";
import { TodoData } from "../Context/TodoComponentContext";

export const TodoInput = () => {
  const { todo, setTodo } = React.useContext(TodoData);
  const [text, setText] = React.useState("");

  const handleTodo = () => {
    const todoDB = {
      id: Date.now(),
      text,
      isEdit: false,
      isCompleted: false,
    };

    setTodo((prev) => [...prev, todoDB]);
   console.log(TodoData);
   
    
    setText("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your text: "
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleTodo}>Add</button>
    </div>
  );
};
