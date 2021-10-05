import React from "react";
import Item from "./Item";
import { useSelector } from "react-redux";

function ItemList() {
  const items = useSelector((state) => state.items);

  return items.map((item) => <Item key={item.id} item={item} />);
}

export default ItemList;
