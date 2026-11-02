import { Link } from "react-router-dom";

function About() {

  return (

    <div className="about-page">

      <h1>About MiniShop</h1>

      <p>
        MiniShop is a simple online shopping
        application built using React and Redux Toolkit.
      </p>

      <p>
        Our goal is to provide a simple and
        convenient shopping experience.
      </p>

      <Link to="/">
        Back to Home
      </Link>

    </div>

  );

}

export default About;