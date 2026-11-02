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

      <div className="checkout-page">

        <h1>Checkout</h1>

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

    <div className="checkout-page">

      <h1>Checkout</h1>

      <h2>Order Summary</h2>

      {/* Order Items */}

      {items.map((item) => (

        <div
          className="checkout-item"
          key={item.id}
        >

          <h3>{item.name}</h3>

          <p>
            Quantity: {item.quantity}
          </p>

          <p>
            Price: ₹{item.price}
          </p>

          <p>
            Subtotal: ₹{item.price * item.quantity}
          </p>

        </div>

      ))}

      {/* Total */}

      <h2>
        Total Amount: ₹{totalPrice}
      </h2>

      <button
        onClick={() => navigate("/cart")}
      >
        Back to Cart
      </button>

      <button
        onClick={() => alert("Order placed successfully!")}
      >
        Place Order
      </button>

    </div>

  );

}

export default Checkout;