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

  const totalItems = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Empty Cart
  if (items.length === 0) {

    return (

      <main className="cart-page cart-empty">
        <div className="empty-visual" aria-hidden="true">🛍</div>
        <h1>Your cart is waiting</h1>
        <p>Looks like you haven't added anything to your cart yet.</p>
        <button className="button button-primary" onClick={() => navigate("/products")}>
          Browse Products <span aria-hidden="true">→</span>
        </button>
      </main>

    );

  }

  return (

    <main className="cart-page">
      <header>
        <h1 className="page-heading">Your Cart</h1>
        <p className="page-intro">{totalItems} {totalItems === 1 ? "item" : "items"} ready for you</p>
      </header>

      <div className="cart-layout">
        <div className="cart-items">
          {items.map((item) => (
            <article className="cart-item" key={item.id}>
              <div className="cart-item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p>₹{item.price} each</p>
                <div className="quantity" aria-label={`Quantity: ${item.quantity}`}>
                  <button
                    aria-label={`Decrease ${item.name} quantity`}
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    aria-label={`Increase ${item.name} quantity`}
                    onClick={() => dispatch(increaseQuantity(item.id))}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="cart-item-end">
                <p className="cart-subtotal">₹{item.price * item.quantity}</p>
                <button
                  className="remove-button"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </div>
            </article>
          ))}
        </div>

        <aside className="order-summary">
          <h2>Order Summary</h2>
          <div className="summary-line"><span>Items ({totalItems})</span><span>₹{totalPrice}</span></div>
          <div className="summary-line"><span>Delivery</span><span>Free</span></div>
          <div className="summary-divider" />
          <div className="summary-total"><span>Total</span><strong>₹{totalPrice}</strong></div>
          <div className="summary-actions">
            <button className="button button-primary" onClick={() => navigate("/checkout")}>
              Proceed to Checkout <span aria-hidden="true">→</span>
            </button>
            <button className="button button-danger" onClick={() => dispatch(clearCart())}>
              Clear Cart
            </button>
          </div>
        </aside>
      </div>
    </main>

  );

}

export default Cart;