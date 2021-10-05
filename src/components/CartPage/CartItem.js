import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../actions/cartActions";

function CartItem({ item }) {
  const { itemName, price } = item;
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{itemName}</h2>
      <p>{price}</p>
      <button onClick={() => dispatch(removeFromCart(item))}>
        Remove from cart
      </button>
    </div>
  );
}

export default CartItem;
