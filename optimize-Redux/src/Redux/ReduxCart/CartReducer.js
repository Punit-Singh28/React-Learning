import * as types from "../Action/Action";

export const CartReducer = (state, action) => {
  switch (action.types) {
    case types.ADD_TO_CART: {
      return {
        
      };
    }
    default:
      return state;
  }
};
