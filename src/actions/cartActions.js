import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
} from "./types";

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: {
      id: item.id,
      itemName: item.itemName,
      price: item.price,
      quantity: 1,
    },
  };
};

export const removeFromCart = (item) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      id: item.id,
    },
  };
};

export const incrementQuantity = (item) => {
  return {
    type: INCREMENT_QUANTITY,
    payload: {
      id: item.id,
    },
  };
};

export const decrementQuantity = (item) => {
  return {
    type: DECREMENT_QUANTITY,
    payload: {
      id: item.id,
    },
  };
};
