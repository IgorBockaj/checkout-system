import { ADD_TO_CART, REMOVE_FROM_CART } from "./types";

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: {
      id: item.id,
      itemName: item.itemName,
      price: item.price,
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
