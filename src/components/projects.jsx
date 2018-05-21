import React from 'react';

const renderProject = project => (
  <article key={project.title} className="project">
    <img
      className="project-image"
      src={`/assets/projects/${project.image}`}
      alt=""
    />

    <div className="project-content">
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.text}</p>
      {project.link && (
        <a className="project-link" href={project.link.href}>
          {project.link.text}
        </a>
      )}
      {project.file && (
        <a className="project-link" href={`/download/${project.file}`}>
          Download
        </a>
      )}
    </div>
  </article>
);

export default ({ projects }) => (
  <section className="projects">
    <div className="container">
      <h2 id="projects">Projects</h2>
      <p>
        These are some of the projects I&#8217;ve worked on, both at university
        and in my spare time.
      </p>

      <div className="projects-wrapper">{projects.map(renderProject)}</div>
    </div>
  </section>
);
