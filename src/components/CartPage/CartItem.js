import React from "react";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  changePrice,
  motionSensorDiscount,
  smokeSensorDiscount,
} from "../../actions/cartActions";

function CartItem({ item }) {
  const { itemName, quantity, totalPrice } = item;

  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(incrementQuantity(item));
    dispatch(changePrice(item));
    dispatch(motionSensorDiscount(item));
    dispatch(smokeSensorDiscount(item));
  };

  const handleRemove = () => {
    dispatch(decrementQuantity(item));
    dispatch(changePrice(item));
    dispatch(motionSensorDiscount(item));
    dispatch(smokeSensorDiscount(item));
  };

  return (
    <div className="cart-item">
      <div className="cart-item_name">
        <h2>{itemName}</h2>
      </div>

      <div className="cart-item_price">
        <p>{totalPrice.toFixed(2)} €</p>
      </div>

      <div className="cart-item_buttons">
        <p>{quantity}</p>

        <div className="add-remove">
          <button onClick={handleAdd}>+</button>
          {quantity > 1 && <button onClick={handleRemove}>-</button>}
        </div>

        <button onClick={() => dispatch(removeFromCart(item))}>
          <i className="material-icons">delete</i>
        </button>
      </div>
    </div>
  );
}

export default CartItem;
