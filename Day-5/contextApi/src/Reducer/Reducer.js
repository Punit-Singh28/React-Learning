import * as actionTypes from './Action';

export const Reducer = (state, { type, payload }) => {
  switch (type) {
    // CREATE
    case actionTypes.TODO_CREATE: {
      const todoData = {
        id: Date.now(),
        text: payload,
        isEdits: false,
        isComplete: false,
      };
      return {
        ...state,
        todo: [...state.todo, todoData],
      };
    }

    // DELETE
    case actionTypes.TODO_DELETE: {
      return {
        ...state,
        todo: state.todo?.filter((el) => el.id !== payload),
      };
    }

    // ENTER EDIT MODE
    case actionTypes.TODO_EDIT: {
      return {
        ...state,
        todo: state.todo?.map((el) =>
          el.id === payload ? { ...el, isEdits: true } : el
        ),
      };
    }

    // CANCEL EDIT
    case actionTypes.TODO_CANCEL: {
      return {
        ...state,
        todo: state.todo?.map((el) =>
          el.id === payload ? { ...el, isEdits: false } : el
        ),
      };
    }

    // CONFIRM EDIT (save new text)
    case actionTypes.TODO_CONFIRM: {
      return {
        ...state,
        todo: state.todo?.map((el) =>
          el.id === payload.id
            ? { ...el, text: payload.newText, isEdits: false }
            : el
        ),
      };
    }

    // TOGGLE COMPLETED
    case actionTypes.TODO_COMPLETED: {
      return {
        ...state,
        todo: state.todo?.map((el) =>
          el.id === payload ? { ...el, isComplete: !el.isComplete } : el
        ),
      };
    }

    default:
      return state;
  }
};
