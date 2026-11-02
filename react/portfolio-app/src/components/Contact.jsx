import contact from "../data/contact";
import { GithubIcon } from "./Navbar";

function Contact() {
  return (
    <section className="section contact-section section-anchor" id="contact">
      <div className="container">
        <div className="contact-panel">
          <div className="contact-orb contact-orb-one" aria-hidden="true" />
          <div className="contact-orb contact-orb-two" aria-hidden="true" />
          <div className="contact-content">
            <span className="section-kicker">LET&apos;S BUILD SOMETHING</span>
            <h2>Interested in collaborating<br />or discussing ideas?</h2>
            <p>I&apos;m always happy to connect, exchange ideas, and learn from other builders.</p>
            <div className="contact-actions">
              <a className="button button-primary" href={contact.github} target="_blank" rel="noreferrer">
                <GithubIcon /> Find me on GitHub <span aria-hidden="true">↗</span>
              </a>
              {contact.email ? (
                <a className="button button-outline" href={`mailto:${contact.email}`}>Email me <span aria-hidden="true">↗</span></a>
              ) : (
                <span className="contact-placeholder">Email: add address in <code>src/data/contact.js</code></span>
              )}
              {contact.linkedIn ? (
                <a className="button button-outline" href={contact.linkedIn} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
              ) : (
                <span className="contact-placeholder">LinkedIn: add profile URL in <code>src/data/contact.js</code></span>
              )}
            </div>
          </div>
          <div className="contact-decoration" aria-hidden="true">
            <span className="contact-decoration-ring" />
            <span className="contact-decoration-core">AG</span>
            <span className="contact-decoration-spark">✦</span>
            <span className="contact-decoration-plus">+</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
