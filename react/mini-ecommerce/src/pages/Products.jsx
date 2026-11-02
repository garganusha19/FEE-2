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

    <main className="products-page">
      <header className="products-header">
        <div>
          <h1 className="page-heading">Our Products</h1>
          <p className="page-intro">Find something you'll love from our everyday collection.</p>
        </div>
      </header>

      <div className="product-toolbar">
        <label className="search-field">
          <span aria-hidden="true">⌕</span>
          <input
            type="search"
            aria-label="Search products"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>

        <select
          aria-label="Filter by category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
          <option value="Accessories">Accessories</option>
        </select>
      </div>

      {message && (
        <p className="success-message" role="status" aria-live="polite">
          <span aria-hidden="true">✓</span> {message}
        </p>
      )}

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <article className="product-card" key={product.id}>
              <div className="product-image-wrap">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-card-content">
                <span className="product-category">{product.category}</span>
                <h3>{product.name}</h3>
                <p className="product-price">₹{product.price}</p>
                <button className="button button-primary" onClick={() => handleAddToCart(product)}>
                  Add to Cart <span aria-hidden="true">+</span>
                </button>
              </div>
            </article>
          ))
        ) : (
          <p className="empty-results">No products found. Try another search or category.</p>
        )}
      </div>
    </main>

  );

}

export default Products;