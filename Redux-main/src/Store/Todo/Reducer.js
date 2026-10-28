const initialState = {
  todo: [{ id: 1, text: "Punit", isEdit: false, isCompleted: false }],
};

import * as types from "./Action";

export const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TODO_CREATE: {
      return {
        //code......
        todo: [...state.todo, action.payload],
      };
    }
    default:
      return state;
  }
};
