import { NavLink } from "react-router-dom";

import { useSelector } from "react-redux";

function Navbar() {

  const items = useSelector(
    state => state.cart.items
  );

  const totalItems = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (

    <nav className="navbar">

      <NavLink className="brand" to="/" aria-label="MiniStore home">
        <span className="brand-mark">m</span>
        <span>MiniStore</span>
      </NavLink>

      <div className="nav-links">

        <NavLink to="/">Home</NavLink>

        <NavLink to="/products">Products</NavLink>

        <NavLink to="/about">About</NavLink>

        <NavLink className="cart-link" to="/cart" aria-label={`Cart, ${totalItems} items`}>
          <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M3 4h2l2.2 10.1a2 2 0 0 0 2 1.6h8.5a2 2 0 0 0 1.9-1.4L21 8H6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="10" cy="19" r="1.4" fill="currentColor" />
            <circle cx="18" cy="19" r="1.4" fill="currentColor" />
          </svg>
          <span>Cart</span>
          <span className="cart-count">{totalItems}</span>
        </NavLink>

      </div>

    </nav>

  );

}

export default Navbar;