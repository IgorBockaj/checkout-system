import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

function CartList() {
  const cart = useSelector((state) => state.cart);

  return cart.length === 0 ? (
    <h3>Add items to cart</h3>
  ) : (
    cart.map((item) => <CartItem key={cart.id} item={item} />)
  );
}

export default CartList;
