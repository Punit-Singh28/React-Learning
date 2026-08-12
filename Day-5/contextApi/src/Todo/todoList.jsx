import React from "react";
import { TodoContextScope } from "../Context/TodoCotext";
import * as actionTypes from "../Reducer/Action";

export const TodoList = () => {
  const { state, dispatch } = React.useContext(TodoContextScope);

  const handleDelete = (id) => {
    dispatch({ type: actionTypes.TODO_DELETE, payload: id });
  };

  const handleEdit = (id) => {
    dispatch({ type: actionTypes.TODO_EDITS, payload: id });
  };

  return (
    <>
      {state.todo?.map((el) => {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
            key={el.id}
          >
            <input type="checkbox" />
            <h3>{el.text}</h3>
            <button onClick={() => handleEdit(el.id)}>edit</button>
            <button onClick={() => handleDelete(el.id)}>delete</button>
          </div>
        );
      })}

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
            onClick={() =>
              dispatch({ type: actionTypes.TODO_EDIT, payload: el.id })
            }
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
    </>
  );
};
