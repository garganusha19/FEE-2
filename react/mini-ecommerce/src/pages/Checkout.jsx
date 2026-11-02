import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

function Checkout() {

  const items = useSelector(
    (state) => state.cart.items
  );

  const navigate = useNavigate();

  // Calculate total price
  const totalPrice = items.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  // If cart is empty
  if (items.length === 0) {

    return (

      <main className="checkout-page checkout-empty">
        <div className="empty-visual" aria-hidden="true">🛍</div>
        <h1>Nothing to check out yet</h1>
        <p>Your cart is empty. Add a few favorites and come back when you're ready.</p>
        <button className="button button-primary" onClick={() => navigate("/products")}>
          Browse Products <span aria-hidden="true">→</span>
        </button>
      </main>

    );

  }

  return (

    <main className="checkout-page">
      <header className="checkout-heading">
        <h1 className="page-heading">Checkout</h1>
        <p className="page-intro">A few details and your order will be on its way.</p>
      </header>

      <div className="checkout-layout">
        <section className="delivery-card">
          <h2>Delivery details</h2>
          <p>Where should we send your order?</p>
          <div className="delivery-fields">
            <label>
              Full name
              <input type="text" placeholder="Your name" autoComplete="name" />
            </label>
            <label>
              Phone number
              <input type="tel" placeholder="Your phone number" autoComplete="tel" />
            </label>
            <label className="field-wide">
              Email address
              <input type="email" placeholder="you@example.com" autoComplete="email" />
            </label>
            <label className="field-wide">
              Delivery address
              <input type="text" placeholder="House number, street, area" autoComplete="street-address" />
            </label>
            <label>
              City
              <input type="text" placeholder="City" autoComplete="address-level2" />
            </label>
            <label>
              Postal code
              <input type="text" placeholder="Postal code" autoComplete="postal-code" />
            </label>
          </div>
        </section>

        <aside className="checkout-summary">
          <h2>Order Summary</h2>
          {items.map((item) => (
            <article className="checkout-item" key={item.id}>
              <h3>{item.name}</h3>
              <p>Qty {item.quantity} · ₹{item.price} each</p>
              <p className="checkout-subtotal">₹{item.price * item.quantity}</p>
            </article>
          ))}
          <div className="summary-divider" />
          <div className="summary-total"><span>Total amount</span><strong>₹{totalPrice}</strong></div>
          <div className="checkout-actions">
            <button className="button button-primary" onClick={() => alert("Order placed successfully!")}>
              Place Order <span aria-hidden="true">→</span>
            </button>
            <button className="button button-secondary" onClick={() => navigate("/cart")}>
              Back to Cart
            </button>
          </div>
        </aside>
      </div>
    </main>

  );

}

export default Checkout;