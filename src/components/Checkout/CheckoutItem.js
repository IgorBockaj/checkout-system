import React from "react";

function CheckoutItem({ item: { itemName, quantity, totalPrice } }) {
  return (
    <div className="checkout-item">
      <p>{quantity}</p>
      <p>{itemName}</p>
      <p>{totalPrice.toFixed(2)} €</p>
    </div>
  );
}

export default CheckoutItem;
