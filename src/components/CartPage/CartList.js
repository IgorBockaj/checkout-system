import React from "react";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import Promotion from "./Promotion";
import { Link } from "react-router-dom";
import { finalPrice } from "../../actions/priceActions";

function CartList() {
  const cart = useSelector((state) => state.cart);
  const promo = useSelector((state) => state.promo);

  const dispatch = useDispatch();

  const { off5, off20, off20eur } = promo;

  const cartPrices = cart.map((item) => item.totalPrice);

  const fullPrice = cartPrices.reduce((prevValue, currValue) => {
    return prevValue + currValue;
  }, 0);

  const displayPrice = () => {
    if (off5 && off20eur) return <p>{(fullPrice * 0.95 - 20).toFixed(2)} €</p>;
    if (off5) return <p>{(fullPrice * 0.95).toFixed(2)} €</p>;
    if (off20) return <p>{(fullPrice * 0.8).toFixed(2)} €</p>;
    if (off20eur) return <p>{(fullPrice - 20).toFixed(2)} €</p>;

    return fullPrice.toFixed(2);
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
      <button onClick={() => dispatch(finalPrice(fullPrice))}>
        <Link to="/checkout">Checkout</Link>
      </button>
    </>
  );
}

export default CartList;
