import React from "react";
import { useDispatch } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  changePrice,
  motionSensorDiscount,
  smokeSensorDiscount,
  removeFromCart,
} from "../actions/cartActions";

function CartButtons({ item }) {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(incrementQuantity(item));
    dispatch(changePrice(item));
    dispatch(motionSensorDiscount(item));
    dispatch(smokeSensorDiscount(item));
  };

  const handleRemove = () => {
    dispatch(decrementQuantity(item));
    dispatch(changePrice(item));
    dispatch(motionSensorDiscount(item));
    dispatch(smokeSensorDiscount(item));
  };

  return (
    <div className="cart-item_buttons">
      <div className="cart-item_buttons">
        <p>{item.quantity}</p>

        <div className="add-remove">
          <button onClick={handleAdd}>+</button>
          {item.quantity > 1 && <button onClick={handleRemove}>-</button>}
        </div>

        <button onClick={() => dispatch(removeFromCart(item))}>
          <i className="material-icons">delete</i>
        </button>
      </div>
    </div>
  );
}

export default CartButtons;
