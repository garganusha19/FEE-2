import { Link } from "react-router-dom";

function About() {

  return (

    <main className="page-shell">
      <section className="about-layout">
        <div className="about-copy">
          <span className="welcome-badge"><span aria-hidden="true">✦</span> A little about us</span>
          <h1 className="page-heading">Shopping should feel simple.</h1>
          <p>MiniStore is your friendly corner for useful finds and everyday favorites. We bring a thoughtful collection together in one easy-to-use shopping experience.</p>
          <p>From discovering something new to keeping track of your order, we believe the little details make shopping more enjoyable.</p>
          <Link className="button button-primary" to="/">Back to Home <span aria-hidden="true">→</span></Link>
        </div>
        <div className="about-visual" aria-hidden="true">
          <span className="about-sticker about-sticker-one">Good things inside</span>
          <div className="about-bag">✦</div>
          <span className="about-sticker about-sticker-two">Picked with care</span>
        </div>
      </section>
    </main>

  );

}

export default About;