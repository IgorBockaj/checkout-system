import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import Promotion from "./Promotion";

function CartList() {
  const cart = useSelector((state) => state.cart);
  const promo = useSelector((state) => state.promo);

  const { off5, off20, off20eur } = promo;

  const cartPrices = cart.map((item) => item.totalPrice);

  const finalPrice = cartPrices.reduce((prevValue, currValue) => {
    return prevValue + currValue;
  }, 0);

  const displayPrice = () => {
    if (off5 && off20eur) return <p>{(finalPrice * 0.95 - 20).toFixed(2)} €</p>;
    if (off5) return <p>{(finalPrice * 0.95).toFixed(2)} €</p>;
    if (off20) return <p>{(finalPrice * 0.8).toFixed(2)} €</p>;
    if (off20eur) return <p>{(finalPrice - 20).toFixed(2)} €</p>;

    return finalPrice.toFixed(2);
  };

  return cart.length === 0 ? (
    <h3>Add items to cart</h3>
  ) : (
    <>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <h2>Total Price</h2>
      {displayPrice()}
      <Promotion />
    </>
  );
}

export default CartList;
