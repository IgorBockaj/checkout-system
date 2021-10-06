import { FINAL_PRICE } from "./types";

export const finalPrice = (price) => {
  return {
    type: FINAL_PRICE,
    payload: price,
  };
};
