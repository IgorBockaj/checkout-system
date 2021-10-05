import React from "react";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../../actions/cartActions";

function CartItem({ item }) {
  const { itemName, price, quantity } = item;

  const dispatch = useDispatch();

  return (
    <div>
      <h2>{itemName}</h2>
      <p>{(price * quantity).toFixed(2)}</p>
      <button onClick={() => dispatch(removeFromCart(item))}>
        Remove from cart
      </button>
      <p>{quantity}</p>
      <button onClick={() => dispatch(incrementQuantity(item))}>+</button>
      {quantity > 1 && (
        <button onClick={() => dispatch(decrementQuantity(item))}>-</button>
      )}
    </div>
  );
}

export default CartItem;
