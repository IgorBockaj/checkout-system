import React from "react";

function CheckoutItem({ item: { itemName, quantity, totalPrice } }) {
  return (
    <div>
      <h4>
        {quantity} {itemName}: {totalPrice.toFixed(2)} €
      </h4>
    </div>
  );
}

export default CheckoutItem;
