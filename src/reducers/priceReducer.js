import { FINAL_PRICE } from "../actions/types";

const priceReducer = (state = [], action) => {
  switch (action.type) {
    case FINAL_PRICE:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default priceReducer;
