import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  enterPromoOff5,
  enterPromoOff20,
  enterPromoOff20Eur,
} from "../../actions/promoActions";

import EnteredPromo from "./EnteredPromo";

function Promotion() {
  const [input, setInput] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input === "20%OFF") {
      dispatch(enterPromoOff20(input));
    } else if (input === "5%OFF") {
      dispatch(enterPromoOff5(input));
    } else if (input === "20EUROFF") {
      dispatch(enterPromoOff20Eur(input));
    } else {
      setErrorMessage(input);
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
          <div className="error-message">{`${errorMessage} is not valid Promo Code`}</div>
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
