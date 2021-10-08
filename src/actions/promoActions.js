import {
  OFF20,
  OFF5,
  OFF20EUR,
  REMOVE_PROMO_5,
  REMOVE_PROMO_20EUR,
  REMOVE_PROMO_20,
  ORDER_AND_PAY_PROMO,
} from "../actions/types";

export const enterPromoOff5 = (code) => {
  return {
    type: OFF5,
    payload: code,
  };
};

export const enterPromoOff20 = (code) => {
  return {
    type: OFF20,
    payload: code,
  };
};

export const enterPromoOff20Eur = (code) => {
  return {
    type: OFF20EUR,
    payload: code,
  };
};

export const removePromo5 = () => {
  return {
    type: REMOVE_PROMO_5,
  };
};

export const removePromo20 = () => {
  return {
    type: REMOVE_PROMO_20,
  };
};

export const removePromo20Eur = () => {
  return {
    type: REMOVE_PROMO_20EUR,
  };
};

export const orderAndPayPromo = () => {
  return {
    type: ORDER_AND_PAY_PROMO,
  };
};
