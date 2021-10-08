import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  CHANGE_PRICE,
  MOTION_SENSOR_DISCOUNT,
  SMOKE_SENSOR_DISCOUNT,
  ORDER_AND_PAY_CART,
} from "./types";

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: {
      id: item.id,
      itemName: item.itemName,
      price: item.price,
      totalPrice: item.totalPrice,
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

export const changePrice = (item) => {
  return {
    type: CHANGE_PRICE,
    payload: {
      id: item.id,
    },
  };
};

export const motionSensorDiscount = (item) => {
  return {
    type: MOTION_SENSOR_DISCOUNT,
    payload: {
      itemName: item.itemName,
    },
  };
};

export const smokeSensorDiscount = (item) => {
  return {
    type: SMOKE_SENSOR_DISCOUNT,
    payload: {
      itemName: item.itemName,
    },
  };
};

export const orderAndPayCart = () => {
  return {
    type: ORDER_AND_PAY_CART,
  };
};
