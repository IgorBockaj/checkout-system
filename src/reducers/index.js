import { combineReducers } from "redux";
import itemsReducer from "./itemsReducer";
import cartReducer from "./cartReducer";
import promoReducer from "./promoReducer";

const rootReducer = combineReducers({
  items: itemsReducer,
  cart: cartReducer,
  promo: promoReducer,
});

export default rootReducer;
