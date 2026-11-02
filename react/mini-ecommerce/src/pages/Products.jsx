import { useState } from "react";
import { useDispatch } from "react-redux";

import { addToCart } from "../redux/cartSlice";
import products from "../data/products";

function Products() {

  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [message, setMessage] = useState("");

  // Search and category filtering
  const filteredProducts = products.filter((product) => {

    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      product.category === category;

    return matchesSearch && matchesCategory;

  });

  // Add product to Redux cart
  const handleAddToCart = (product) => {

    dispatch(addToCart(product));

    setMessage(`${product.name} added to cart!`);

    setTimeout(() => {
      setMessage("");
    }, 2000);

  };

  return (

    <div className="products-page">

      <h1>Our Products</h1>

      {/* Search Bar */}

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Category Filter */}

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >

        <option value="All">All Categories</option>

        <option value="Electronics">
          Electronics
        </option>

        <option value="Fashion">
          Fashion
        </option>

        <option value="Accessories">
          Accessories
        </option>

      </select>

      {/* Confirmation Message */}

      {message && (
        <p className="success-message">
          {message}
        </p>
      )}

      {/* Product Grid */}

      <div className="product-grid">

        {filteredProducts.length > 0 ? (

          filteredProducts.map((product) => (

            <div
              className="product-card"
              key={product.id}
            >

              <img
                src={product.image}
                alt={product.name}
              />

              <h3>{product.name}</h3>

              <p>₹{product.price}</p>

              <p>Category: {product.category}</p>

              <button
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>

            </div>

          ))

        ) : (

          <p>No products found.</p>

        )}

      </div>

    </div>

  );

}

export default Products;