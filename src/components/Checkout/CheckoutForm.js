import React, { useState } from "react";
import validator from "validator";
import history from "../../history";

function CheckoutForm() {
  const [data, setData] = useState({
    email: "",
    address: "",
    cardNumber: "",
    cvv: "",
    expDate: "",
    cardName: "",
  });

  const [validCard, setValidCard] = useState(false);
  const [validEmail, setValidEmail] = useState(false);

  const { email, address, cardNumber, cvv, expDate, cardName } = data;

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const emailChecker = (email) => {
    if (validator.isEmail(email)) return setValidEmail(true);
    return setValidEmail(false);
  };

  const onSubmit = (e) => {
    if (validEmail && validCard) return history.push("/");
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>Personal Information</h3>
      <div>
        <input
          type="email"
          placeholder="Enter Email..."
          value={email}
          name="email"
          autoComplete="off"
          required
          onChange={(e) => {
            onChange(e);
            emailChecker(email);
          }}
        />

        {validEmail && <i className="material-icons">check</i>}
      </div>

      <div>
        <input
          type="text"
          placeholder="Enter Your Address..."
          value={address}
          name="address"
          autoComplete="no"
          required
          onChange={onChange}
        />
      </div>

      <h3>Credit Card Details</h3>

      <div>
        <input
          type="text"
          placeholder="Name on Card"
          name="cardName"
          value={cardName}
          autoComplete="off"
          required
          onChange={onChange}
        />
      </div>

      <div>
        <input
          type="number"
          name="cardNumber"
          placeholder="Card Number"
          value={cardNumber}
          autoComplete="off"
          required
          onChange={(e) => {
            onChange(e);
            +e.target.value.length === 16
              ? setValidCard(true)
              : setValidCard(false);
          }}
        />
        {validCard && <i className="material-icons">check</i>}
        {cardNumber.length > 16 && (
          <p>Card Number contains only 16 characters</p>
        )}
      </div>

      <div>
        <input
          type="number"
          placeholder="CVV"
          name="cvv"
          value={cvv}
          autoComplete="off"
          required
          onChange={onChange}
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="Expiration Date"
          name="expDate"
          autoComplete="off"
          required
          value={expDate}
          onChange={onChange}
        />
      </div>

      <input type="submit" value="Pay" />
    </form>
  );
}

export default CheckoutForm;
