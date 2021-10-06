import React, { useState } from "react";

function CheckoutForm() {
  const [data, setData] = useState({
    email: "",
    address: "",
    cardNumber: "",
    cvv: "",
    expDate: "",
  });

  const { email, address, cardNumber, cvv, expDate } = data;

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <form>
      <h3>Personal Information</h3>
      <input
        type="email"
        placeholder="Enter Email.."
        value={email}
        name="email"
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Enter Your Address.."
        value={address}
        name="address"
        onChange={onChange}
      />
      <h3>Credit Card Details</h3>
      <input
        type="number"
        name="cardNumber"
        placeholder="Card Number"
        value={cardNumber}
        onChange={onChange}
      />
      <input
        type="number"
        placeholder="CVV"
        name="cvv"
        value={cvv}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Expiration Date"
        maxLength="5"
        name="expDate"
        value={expDate}
        onChange={onChange}
      />
      <button>Pay</button>
    </form>
  );
}

export default CheckoutForm;
