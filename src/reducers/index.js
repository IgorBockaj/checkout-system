import { combineReducers } from "redux";
import itemsReducer from "./itemsReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  items: itemsReducer,
  cart: cartReducer,
});

export default rootReducer;
