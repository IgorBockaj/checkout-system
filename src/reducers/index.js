import { combineReducers } from "redux";
import itemsReducer from "./itemsReducer";
import cartReducer from "./cartReducer";
import promoReducer from "./promoReducer";
import priceReducer from "./priceReducer";

const rootReducer = combineReducers({
  items: itemsReducer,
  cart: cartReducer,
  promo: promoReducer,
  finalPrice: priceReducer,
});

export default rootReducer;
