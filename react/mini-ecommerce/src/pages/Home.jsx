import { Link, useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  return (

    <main className="home-page">
      <section className="hero-section">
        <div className="hero-copy">
          <span className="welcome-badge"><span aria-hidden="true">✦</span> Welcome to MiniStore</span>
          <h1>Shop Smart,<br /><span>Shop Easy.</span></h1>
          <p>Find everyday favorites and thoughtful essentials, all in one happy place. Great picks, simple shopping, delivered to you.</p>
          <div className="home-buttons">
            <Link className="button button-primary" to="/products">Shop Products <span aria-hidden="true">→</span></Link>
            <button className="button button-secondary" onClick={() => navigate("/cart")}>View Cart</button>
          </div>
          <div className="hero-note"><span className="hero-note-dot" /> Curated finds, made for your everyday</div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="visual-orbit" />
          <div className="shopping-bag-visual">
            <div className="bag-handle" />
            <span className="bag-star">✦</span>
            <strong>mini</strong>
            <small>GOOD FINDS, EVERY DAY</small>
          </div>
          <div className="floating-product floating-product-one">
            <span className="floating-product-icon">⌚</span>
            <span><strong>Everyday picks</strong><small>Thoughtfully selected</small></span>
          </div>
          <div className="floating-product floating-product-two">
            <span className="floating-product-icon">✦</span>
            <span><strong>A little joy</strong><small>In every delivery</small></span>
          </div>
        </div>
      </section>

      <section className="benefits-section" aria-labelledby="benefits-heading">
        <h2 className="benefits-heading" id="benefits-heading">A better way to shop</h2>
        <div className="benefits-grid">
          <article className="benefit-card">
            <span className="benefit-icon" aria-hidden="true">↗</span>
            <span><strong>Free Delivery</strong><small>On orders over ₹999</small></span>
          </article>
          <article className="benefit-card">
            <span className="benefit-icon" aria-hidden="true">✓</span>
            <span><strong>Secure Payment</strong><small>Shop with confidence</small></span>
          </article>
          <article className="benefit-card">
            <span className="benefit-icon" aria-hidden="true">↺</span>
            <span><strong>Easy Returns</strong><small>We make it hassle-free</small></span>
          </article>
          <article className="benefit-card">
            <span className="benefit-icon" aria-hidden="true">✦</span>
            <span><strong>Quality Products</strong><small>Picked with care</small></span>
          </article>
        </div>
      </section>
    </main>

  );

}

export default Home;