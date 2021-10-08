import { FINAL_PRICE, ORDER_AND_PAY_PRICE } from "../actions/types";

const priceReducer = (state = [], action) => {
  switch (action.type) {
    case FINAL_PRICE:
      return [action.payload];

    case ORDER_AND_PAY_PRICE:
      return [];

    default:
      return state;
  }
};

export default priceReducer;
