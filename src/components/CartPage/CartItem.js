import React from "react";
import CartButtons from "../CartButtons";

function CartItem({ item }) {
  const { itemName, totalPrice } = item;

  return (
    <div className="cart-item">
      <div className="cart-item_name">
        <h2>{itemName}</h2>
      </div>

      <div className="cart-item_price">
        <p>{totalPrice.toFixed(2)} €</p>
      </div>

      <CartButtons item={item} />
    </div>
  );
}

export default CartItem;
