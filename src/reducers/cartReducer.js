import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  CHANGE_PRICE,
  MOTION_SENSOR_DISCOUNT,
  SMOKE_SENSOR_DISCOUNT,
  ORDER_AND_PAY_CART,
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
    case CHANGE_PRICE:
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, totalPrice: item.quantity * item.price }
          : item
      );
    case MOTION_SENSOR_DISCOUNT:
      return state.map((item) =>
        item.itemName === "Motion Sensor"
          ? {
              ...item,
              totalPrice:
                item.quantity % 3 === 0
                  ? (65 * item.quantity) / 3
                  : (65 * (item.quantity - (item.quantity % 3))) / 3 +
                    item.price * (item.quantity % 3),
            }
          : item
      );
    case SMOKE_SENSOR_DISCOUNT:
      return state.map((item) =>
        item.itemName === "Smoke Sensor"
          ? {
              ...item,
              totalPrice:
                item.quantity % 2 === 0
                  ? (35 * item.quantity) / 2
                  : (35 * (item.quantity - 1)) / 2 + item.price,
            }
          : item
      );

    case ORDER_AND_PAY_CART:
      return [];

    default:
      return state;
  }
};

export default cartReducer;
