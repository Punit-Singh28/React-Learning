import React, { createContext } from "react";
import { Reducer } from "../Reducer/Reducer";

export const TodoContextScope = createContext(null);

export const TodoComponentsContext = ({ children }) => {
//   const [todo, setTodo] = React.useState([]);

  const [state, dispatch] = React.useReducer(Reducer, { todo: [] });
  return (
    <TodoContextScope.Provider value={{ state, dispatch }}>
      {children}
    </TodoContextScope.Provider>
  );
};
