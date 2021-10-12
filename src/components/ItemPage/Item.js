import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
  changePrice,
  motionSensorDiscount,
  smokeSensorDiscount,
  removeFromCart,
} from "../../actions/cartActions";

function Item({ item }) {
  const { itemName, price } = item;

  const cart = useSelector((state) => state.cart);
  const cartIDs = cart.map((item) => item.id);
  const dispatch = useDispatch();

  const imgName = itemName.toLowerCase().split(" ").join("-");

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
    <div className="item">
      <img src={require(`../../images/${imgName}.jpg`).default} alt={imgName} />

      <div className="item-details">
        <h3>{itemName}</h3>
        <div>
          <p className="item-price">{price} €</p>
          {itemName === "Motion Sensor" && <p>3 pieces for 65€ !</p>}
          {itemName === "Smoke Sensor" && <p>2 pieces for 35€ !</p>}
        </div>
      </div>

      <div className="item-button">
        {cartIDs.includes(item.id) ? (
          <div className="item-cart-connection">
            <p>Item added to cart</p>
            {cart.map((item) =>
              item.itemName === itemName ? (
                <div>
                  <div className="item-to-cart-buttons">
                    <p>{item.quantity}</p>
                    <button onClick={handleAdd}>+</button>
                    {item.quantity > 1 && (
                      <button onClick={handleRemove}>-</button>
                    )}

                    <button onClick={() => dispatch(removeFromCart(item))}>
                      <i className="material-icons">delete</i>
                    </button>
                  </div>
                </div>
              ) : null
            )}
          </div>
        ) : (
          <button
            className="add-to-cart"
            onClick={() => dispatch(addToCart(item))}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Item;
