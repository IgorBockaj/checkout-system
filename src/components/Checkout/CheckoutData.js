import React from "react";
import { useSelector } from "react-redux";
import CheckoutItem from "./CheckoutItem";
import { Link } from "react-router-dom";

function CheckoutData() {
  const cart = useSelector((state) => state.cart);
  const finalPrice = useSelector((state) => state.finalPrice);

  return (
    <div className="checkout-data">
      <div>
        <h3>Your cart:</h3>
        <Link className="back-to-cart" to="/cart">
          Back to cart
        </Link>
      </div>

      {cart.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <h3 className="checkout-total">
        Total Price:{" "}
        {finalPrice.length !== 0 ? <>{finalPrice[0].toFixed(2)} € </> : null}
      </h3>
    </div>
  );
}

export default CheckoutData;
