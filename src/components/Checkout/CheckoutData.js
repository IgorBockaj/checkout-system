import React from "react";
import { useSelector } from "react-redux";
import CheckoutItem from "./CheckoutItem";

function CheckoutData() {
  const cart = useSelector((state) => state.cart);
  const finalPrice = useSelector((state) => state.finalPrice);

  return (
    <div>
      <h3>Your inventory:</h3>
      {cart.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <h4>Total Price:</h4>
      {finalPrice[0]} €
    </div>
  );
}

export default CheckoutData;
