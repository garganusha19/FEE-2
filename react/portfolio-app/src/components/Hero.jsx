const technologyBadges = ["Java", "Python", "React", "CSS"];

function CodeIllustration() {
  return (
    <div className="editor-scene" aria-label="Decorative code editor illustration">
      <div className="editor-glow" />
      <div className="editor-window">
        <div className="editor-topbar">
          <div className="window-dots" aria-hidden="true">
            <i /><i /><i />
          </div>
          <span className="editor-tab"><span className="tab-dot" /> hello-world.jsx</span>
          <span className="editor-menu" aria-hidden="true">•••</span>
        </div>
        <div className="editor-body" aria-hidden="true">
          <div className="code-line"><span className="line-number">1</span><code><span className="code-purple">const</span> <span className="code-blue">developer</span> = {"{"}</code></div>
          <div className="code-line"><span className="line-number">2</span><code>&nbsp;&nbsp;name: <span className="code-green">"Anusha"</span>,</code></div>
          <div className="code-line"><span className="line-number">3</span><code>&nbsp;&nbsp;curious: <span className="code-orange">true</span>,</code></div>
          <div className="code-line"><span className="line-number">4</span><code>&nbsp;&nbsp;building: <span className="code-green">"what's next"</span></code></div>
          <div className="code-line"><span className="line-number">5</span><code>{"};"}</code></div>
          <div className="code-line code-line-spacer"><span className="line-number">6</span><code>&nbsp;</code></div>
          <div className="code-line"><span className="line-number">7</span><code><span className="code-purple">while</span> (learning) {"{"}</code></div>
          <div className="code-line"><span className="line-number">8</span><code>&nbsp;&nbsp;build<span className="code-blue">Something</span>();</code></div>
          <div className="code-line"><span className="line-number">9</span><code>{"}"}</code></div>
          <span className="code-cursor" />
        </div>
        <div className="editor-status">
          <span><span className="status-dot" /> Ready to build</span>
          <span>UTF-8&nbsp; · &nbsp;JSX</span>
        </div>
      </div>
      <div className="float-chip float-chip-top"><span>✦</span> always learning</div>
      <div className="float-chip float-chip-bottom"><span className="mini-spark">↗</span> ideas into code</div>
      <div className="scene-orbit orbit-one" />
      <div className="scene-orbit orbit-two" />
    </div>
  );
}

function Hero() {
  return (
    <section className="hero-section section-anchor" id="home">
      <div className="container hero-layout">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> Computer Science Engineering</div>
          <h1>Hi, I&apos;m <span className="gradient-text">Anusha Garg</span></h1>
          <p className="hero-role">CSE Student <span>·</span> Developer <span>·</span> AI Explorer</p>
          <p className="hero-description">
            I build practical software experiences, explore new technologies,
            and keep improving through code.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore Projects <span aria-hidden="true">↗</span>
            </a>
            <a className="button button-quiet" href="#contact">
              Let&apos;s Connect <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="tech-strip" aria-label="Technologies">
            <span className="tech-strip-label">CURRENTLY EXPLORING</span>
            <div className="tech-badges">
              {technologyBadges.map((technology) => (
                <span className="tech-badge" key={technology}>{technology}</span>
              ))}
            </div>
          </div>
        </div>
        <CodeIllustration />
      </div>
      <a className="scroll-cue" href="#projects">
        <span className="scroll-cue-line" />
        Scroll to explore
      </a>
    </section>
  );
}

export default Hero;
