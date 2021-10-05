import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [pathname, setPathname] = useState(window.location.pathname);

  return (
    <nav>
      <h3>Checkout System</h3>
      {pathname === "/" ? (
        <Link onClick={() => setPathname("/cart")} to="/cart">
          Cart
        </Link>
      ) : (
        <Link onClick={() => setPathname("/")} to="/">
          Home
        </Link>
      )}
    </nav>
  );
}

export default Navbar;
