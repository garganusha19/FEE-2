import { useSelector, useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart
} from "../redux/cartSlice";

function Cart() {

  const items = useSelector(
    (state) => state.cart.items
  );

  const dispatch = useDispatch();

  const navigate = useNavigate();

  // Calculate total price
  const totalPrice = items.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  // Empty Cart
  if (items.length === 0) {

    return (

      <div className="cart-page">

        <h1>Your Cart</h1>

        <p>Your cart is empty.</p>

        <button
          onClick={() => navigate("/products")}
        >
          Browse Products
        </button>

      </div>

    );

  }

  return (

    <div className="cart-page">

      <h1>Your Cart</h1>

      {items.map((item) => (

        <div
          className="cart-item"
          key={item.id}
        >

          <h3>{item.name}</h3>

          <p>Price: ₹{item.price}</p>

          {/* Quantity Controls */}

          <div className="quantity">

            <button
              onClick={() =>
                dispatch(decreaseQuantity(item.id))
              }
            >
              -
            </button>

            <span>{item.quantity}</span>

            <button
              onClick={() =>
                dispatch(increaseQuantity(item.id))
              }
            >
              +
            </button>

          </div>

          {/* Subtotal */}

          <p>
            Subtotal: ₹{item.price * item.quantity}
          </p>

          {/* Remove Product */}

          <button
            onClick={() =>
              dispatch(removeFromCart(item.id))
            }
          >
            Remove
          </button>

        </div>

      ))}

      {/* Total Price */}

      <h2>
        Total: ₹{totalPrice}
      </h2>

      {/* Clear Cart */}

      <button
        onClick={() => dispatch(clearCart())}
      >
        Clear Cart
      </button>

      {/* Checkout */}

      <button
        onClick={() => navigate("/checkout")}
      >
        Proceed to Checkout
      </button>

    </div>

  );

}

export default Cart;