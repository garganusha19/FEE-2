import skills from "../data/skills";

function Skills() {
  return (
    <section className="section skills-section section-anchor" id="skills">
      <div className="container">
        <div className="section-heading centered-heading">
          <span className="section-kicker">TOOLS IN MY TOOLKIT</span>
          <h2>Learning, one <span className="gradient-text">build at a time</span></h2>
          <p>Technologies reflected in my public projects and current learning journey.</p>
        </div>
        <div className="skills-grid">
          {skills.map((group, index) => (
            <article className="skill-card" key={group.group}>
              <div className={`skill-icon skill-icon-${index + 1}`} aria-hidden="true">
                {["</>", "◈", "⌘", "✳"][index]}
              </div>
              <h3>{group.group}</h3>
              <p>{group.description}</p>
              <ul className="skill-badges">
                {group.items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
