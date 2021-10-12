import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  enterPromoOff5,
  enterPromoOff20,
  enterPromoOff20Eur,
} from "../../actions/promoActions";

import EnteredPromo from "./EnteredPromo";

function Promotion() {
  const [input, setInput] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [warningMessage, setWarningMessage] = useState(null);

  const cart = useSelector((state) => state.cart);
  const promo = useSelector((state) => state.promo);
  const dispatch = useDispatch();

  const { off5, off20, off20eur } = promo;

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // conditions when promo codes can be added
    // seting error message

    if (
      (off20 && input === "5%OFF") ||
      (off20 && input === "20EUROFF") ||
      (off5 && input === "20%OFF") ||
      (off20eur && input === "20%OFF")
    ) {
      setWarningMessage(`You can't combine those two codes.`);
      setTimeout(() => {
        setWarningMessage(null);
      }, 5000);
    } else if (input === "20%OFF") {
      dispatch(enterPromoOff20(input));
    } else if (input === "5%OFF") {
      dispatch(enterPromoOff5(input));
    } else if (
      input === "20EUROFF" &&
      cart.length === 1 &&
      cart[0].itemName === "Smoke Sensor" &&
      cart[0].quantity === 1
    ) {
      setErrorMessage(
        `You can't use this discount on 1 quantity of that product.`
      );
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    } else if (input === "20EUROFF") {
      dispatch(enterPromoOff20Eur(input));
    } else {
      setErrorMessage(`${input} is not valid Promo Code`);
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }

    setInput("");
  };

  return (
    <>
      <EnteredPromo />
      <form className="promo-form">
        {errorMessage && (
          <div className="error-message">{`${errorMessage}`}</div>
        )}
        {warningMessage && (
          <div className="warning-message">{`${warningMessage}`}</div>
        )}

        <h2>Enter Promotion Code</h2>
        <div>
          <input
            type="text"
            placeholder="Promotion code"
            value={input}
            onChange={onChange}
          />
          <button onClick={handleSubmit}>Add Promo</button>
        </div>
      </form>
    </>
  );
}

export default Promotion;
