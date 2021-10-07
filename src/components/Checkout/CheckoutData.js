import React from "react";
import { useSelector } from "react-redux";
import CheckoutItem from "./CheckoutItem";

function CheckoutData() {
  const cart = useSelector((state) => state.cart);
  const finalPrice = useSelector((state) => state.finalPrice);

  return (
    <div>
      <h3>Your cart:</h3>
      {cart.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <h4>Total Price:</h4>
      {finalPrice.length !== 0 ? <p>{finalPrice[0].toFixed(2)} € </p> : null}
    </div>
  );
}

export default CheckoutData;
