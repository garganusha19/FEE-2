import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import { GithubIcon } from "./Navbar";

function Projects() {
  return (
    <section className="section projects-section section-anchor" id="projects">
      <div className="container">
        <div className="section-heading projects-heading">
          <div>
            <span className="section-kicker">SELECTED WORK</span>
            <h2>Projects I&apos;ve <span className="gradient-text">worked on</span></h2>
            <p>A few things I&apos;ve built while learning, exploring, and putting ideas into code.</p>
          </div>
          <a
            className="text-link github-profile-link"
            href="https://github.com/garganusha19"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon /> View GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
        <p className="projects-source">
          Project details are based on the public GitHub repositories and can be edited in <code>src/data/projects.js</code>.
        </p>
      </div>
    </section>
  );
}

export default Projects;
