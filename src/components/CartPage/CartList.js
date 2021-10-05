import React, { useState } from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

function CartList() {
  const cart = useSelector((state) => state.cart);

  const cartPrices = cart.map((item) => item.price * item.quantity);

  const totalPrice = cartPrices.reduce((prevValue, currValue) => {
    return prevValue + currValue;
  }, 0);

  return cart.length === 0 ? (
    <h3>Add items to cart</h3>
  ) : (
    <>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <h2>Total Price</h2>
      {totalPrice.toFixed(2)}
    </>
  );
}

export default CartList;
