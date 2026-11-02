function About() {
  return (
    <section className="section about-section section-anchor" id="about">
      <div className="container about-layout">
        <div className="about-visual" aria-hidden="true">
          <div className="about-terminal">
            <div className="terminal-top">
              <span /><span /><span />
              <small>about-anusha.js</small>
            </div>
            <div className="terminal-code">
              <p><span className="code-muted">01</span> <span className="code-purple">export default</span> <span className="code-blue">developer</span>;</p>
              <p><span className="code-muted">02</span> </p>
              <p><span className="code-muted">03</span> <span className="code-purple">const</span> focus = [</p>
              <p><span className="code-muted">04</span> &nbsp;&nbsp;<span className="code-green">"software"</span>,</p>
              <p><span className="code-muted">05</span> &nbsp;&nbsp;<span className="code-green">"new ideas"</span>,</p>
              <p><span className="code-muted">06</span> &nbsp;&nbsp;<span className="code-green">"keep learning"</span></p>
              <p><span className="code-muted">07</span> ];</p>
              <p className="terminal-comment"><span className="code-muted">08</span> // always a work in progress <span className="code-cursor" /></p>
            </div>
          </div>
          <span className="about-deco about-deco-one">{"{ }"}</span>
          <span className="about-deco about-deco-two">✳</span>
          <span className="about-visual-label">curiosity → creation</span>
        </div>
        <div className="about-copy">
          <span className="section-kicker">A LITTLE ABOUT ME</span>
          <h2>Curious by nature.<br /><span className="gradient-text">Builder by choice.</span></h2>
          <p>
            I&apos;m Anusha, a Computer Science Engineering student interested in
            software development and learning how technology can bring ideas
            to life.
          </p>
          <p>
            I enjoy exploring new tools, working through thoughtful challenges,
            and building practical projects as I grow my skills one step at a time.
          </p>
          <a className="text-link" href="#contact">Say hello <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}

export default About;
