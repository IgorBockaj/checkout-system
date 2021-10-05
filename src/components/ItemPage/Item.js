import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../actions/cartActions";

function Item({ item }) {
  const { itemName, price } = item;

  const cart = useSelector((state) => state.cart);
  const cartIDs = cart.map((item) => item.id);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>{itemName}</h3>
      <p>{price}</p>
      {cartIDs.includes(item.id) ? (
        <p>Item added to cart</p>
      ) : (
        <button onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
      )}
    </div>
  );
}

export default Item;
