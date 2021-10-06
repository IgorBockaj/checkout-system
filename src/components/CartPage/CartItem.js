import React from "react";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  changePrice,
  motionSensorDiscount,
  smokeSensorDiscount,
} from "../../actions/cartActions";

function CartItem({ item }) {
  const { itemName, quantity, totalPrice } = item;

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
    <div>
      <h2>{itemName}</h2>
      <p>{totalPrice.toFixed(2)} €</p>
      <button onClick={() => dispatch(removeFromCart(item))}>
        Remove from cart
      </button>
      <p>{quantity}</p>
      <button onClick={handleAdd}>+</button>
      {quantity > 1 && <button onClick={handleRemove}>-</button>}
    </div>
  );
}

export default CartItem;
