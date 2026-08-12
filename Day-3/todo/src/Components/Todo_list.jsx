import React, { useState } from "react";
import { TodoContextScope } from "../Context/TodoCotext";
import * as actionTypes from "../Reducer/Action";

export const TodoList = () => {
  const { state, dispatch } = React.useContext(TodoContextScope);
  const [editValue, setEditValue] = useState("");

  return (
    <>
      {state.todo?.map((el) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
          key={el.id}
        >
          {el.isEdits ? (
            <>
              <input
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
              />
              <button
                onClick={() =>
                  dispatch({
                    type: actionTypes.TODO_CONFIRM,
                    payload: { id: el.id, newText: editValue },
                  })
                }
              >
                confirm
              </button>
              <button
                onClick={() =>
                  dispatch({ type: actionTypes.TODO_CANCEL, payload: el.id })
                }
              >
                cancel
              </button>
            </>
          ) : (
            <>
              <input
                type="checkbox"
                checked={el.isComplete}
                onChange={() =>
                  dispatch({ type: actionTypes.TODO_COMPLETED, payload: el.id })
                }
              />
              <h3>{el.text}</h3>
              <button
                onClick={() => {
                  setEditValue(el.text); // preload current text
                  dispatch({ type: actionTypes.TODO_EDIT, payload: el.id });
                }}
              >
                edit
              </button>
              <button
                onClick={() =>
                  dispatch({ type: actionTypes.TODO_DELETE, payload: el.id })
                }
              >
                delete
              </button>
            </>
          )}
        </div>
      ))}
    </>
  );
};
