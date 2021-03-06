import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../actions/cartActions";
import CartButtons from "../CartButtons";

function Item({ item }) {
  const { itemName, price } = item;

  const cart = useSelector((state) => state.cart);
  const cartIDs = cart.map((item) => item.id);
  const dispatch = useDispatch();

  const imgName = itemName.toLowerCase().split(" ").join("-");

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
              item.itemName === itemName ? <CartButtons item={item} /> : null
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
