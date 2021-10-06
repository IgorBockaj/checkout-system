import {
  OFF20,
  OFF5,
  OFF20EUR,
  REMOVE_PROMO_5,
  REMOVE_PROMO_20EUR,
  REMOVE_PROMO_20,
} from "../actions/types";

const promos = {
  off5: false,
  off20: false,
  off20eur: false,
};

const promoReducer = (state = promos, action) => {
  switch (action.type) {
    case OFF5:
      return { ...state, off5: true, off20: false };
    case OFF20:
      return { ...state, off5: false, off20: true, off20eur: false };
    case OFF20EUR:
      return { ...state, off20eur: true, off20: false };
    case REMOVE_PROMO_5:
      return { ...state, off5: false };
    case REMOVE_PROMO_20:
      return { ...state, off20: false };
    case REMOVE_PROMO_20EUR:
      return { ...state, off20eur: false };

    default:
      return state;
  }
};

export default promoReducer;
