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

  //calculate prices depending on cart item prices
  const cartPrices = cart.map((item) => item.totalPrice);

  const fullPrice = cartPrices.reduce((prevValue, currValue) => {
    return prevValue + currValue;
  }, 0);

  let promoFullPrice;

  // display price depending on entered promo codes
  const displayPrice = () => {
    if (off5 && off20eur) {
      promoFullPrice = fullPrice * 0.95 - 20;
      return <p>{(fullPrice * 0.95 - 20).toFixed(2)} €</p>;
    }
    if (off5) {
      promoFullPrice = fullPrice * 0.95;
      return <p>{(fullPrice * 0.95).toFixed(2)} €</p>;
    }
    if (off20) {
      promoFullPrice = fullPrice * 0.8;
      return <p>{(fullPrice * 0.8).toFixed(2)} €</p>;
    }
    if (off20eur) {
      promoFullPrice = fullPrice - 20;
      return <p>{(fullPrice - 20).toFixed(2)} €</p>;
    }

    return <p>{fullPrice.toFixed(2)} €</p>;
  };

  return cart.length === 0 ? (
    <h3 className="empty-cart_text">Add items to cart</h3>
  ) : (
    <>
      <div className="table-headings">
        <h3>Item:</h3>
        <h3>Price:</h3>
        <h3>Quantity:</h3>
      </div>

      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <div className="cart-list_total">
        <h2>Total Price</h2>
        <div>{displayPrice()}</div>
      </div>

      <Promotion />
      <button
        className="checkout-button"
        onClick={() =>
          dispatch(finalPrice(promoFullPrice ? promoFullPrice : fullPrice))
        }
      >
        <Link className="checkout-button_link" to="/checkout">
          Checkout
        </Link>
      </button>
    </>
  );
}

export default CartList;
