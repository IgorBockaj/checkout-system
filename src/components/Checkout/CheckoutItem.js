import React from "react";

function CheckoutItem({ item: { itemName, quantity, totalPrice } }) {
  return (
    <div>
      <h4>
        {quantity} {itemName}: {totalPrice} €
      </h4>
    </div>
  );
}

export default CheckoutItem;
