import { FINAL_PRICE, ORDER_AND_PAY_PRICE } from "./types";

export const finalPrice = (price) => {
  return {
    type: FINAL_PRICE,
    payload: price,
  };
};

export const orderAndPayPrice = () => {
  return {
    type: ORDER_AND_PAY_PRICE,
  };
};
