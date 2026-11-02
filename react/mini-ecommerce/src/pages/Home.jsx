import { Link, useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  return (

    <div className="home">

      <h1>Welcome to MiniShop</h1>

      <p>
        Discover amazing products at great prices.
      </p>

      <div className="home-buttons">

        <Link to="/products">
          Browse Products
        </Link>

        <button onClick={() => navigate("/cart")}>
          View Cart
        </button>

      </div>

    </div>

  );

}

export default Home;