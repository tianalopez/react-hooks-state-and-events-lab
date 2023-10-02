import React, { useState } from "react";

function Item({ name, category }) {
  const [cart, toggleCart] = useState(false)

  const cartStatus = cart ? "in-cart": "";

  const changeToggleCart = () => {
    toggleCart((cart) => !cart)
  }

  return (
    <li className={cartStatus}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={changeToggleCart} className="add">{cart ? "Remove from Cart":"Add to Cart"}</button>
    </li>
  );
}

export default Item;
