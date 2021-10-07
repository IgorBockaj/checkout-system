import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const [pathname, setPathname] = useState(window.location.pathname);
  const cart = useSelector((state) => state.cart);

  return (
    <nav className="nav">
      <h3 className="nav-logo">Checkout System</h3>
      {pathname === "/" ? (
        <Link
          className="nav-button"
          onClick={() => setPathname("/cart")}
          to="/cart"
        >
          <i className="material-icons">shopping_cart</i>
          {cart.length !== 0 && <p>{cart.length}</p>}
        </Link>
      ) : (
        <Link className="nav-button" onClick={() => setPathname("/")} to="/">
          <i className="material-icons">home</i>
        </Link>
      )}
    </nav>
  );
}

export default Navbar;
