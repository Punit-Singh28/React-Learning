import { createContext } from "react";

export const TodoData = createContext(null);

import React from "react";

export const TodoComponentContext = ({ children }) => {
  const [todo, setTodo] = React.useState([]);

  return (
    <TodoData.Provider value={{ todo, setTodo }}>{children}</TodoData.Provider>
  );
};
