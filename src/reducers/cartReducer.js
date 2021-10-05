import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
} from "../actions/types";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      return state.filter((item) => item.id !== action.payload.id);
    case INCREMENT_QUANTITY:
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: ++item.quantity }
          : item
      );

    case DECREMENT_QUANTITY:
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: --item.quantity }
          : item
      );
    default:
      return state;
  }
};

export default cartReducer;
