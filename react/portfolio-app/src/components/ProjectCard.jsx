function ProjectCard({ project, index }) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="project-card">
      <div className={`project-art project-art-${index + 1}`} aria-hidden="true">
        <span className="project-number">{number} / 03</span>
        {index === 0 && (
          <div className="vault-art">
            <span className="vault-orbit" />
            <span className="vault-door"><i /><i /><i /></span>
            <span className="vault-label">THE<br />VAULT</span>
          </div>
        )}
        {index === 1 && (
          <div className="memory-art">
            <span className="memory-card memory-card-one">✦</span>
            <span className="memory-card memory-card-two">?</span>
            <span className="memory-card memory-card-three">✧</span>
            <span className="memory-card memory-card-four">?</span>
          </div>
        )}
        {index === 2 && (
          <div className="todo-art">
            <span className="todo-row"><i>✓</i><b /></span>
            <span className="todo-row"><i /><b /></span>
            <span className="todo-row"><i /><b /></span>
            <span className="todo-spark">✦</span>
          </div>
        )}
      </div>
      <div className="project-card-body">
        <div className="project-meta">
          <span>{project.category}</span>
          <span className="project-open" aria-hidden="true">↗</span>
        </div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <ul className="project-tags" aria-label="Technologies">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <a
          className="project-link"
          href={project.repository}
          target="_blank"
          rel="noreferrer"
          aria-label={`View ${project.name} on GitHub`}
        >
          View repository <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
