import React from 'react';

const renderProject = project => (
  <article key={project.title} className="col col-4 col-6-t col-12-m">
    <div className="project">
      <img className="project-image" src={`/assets/projects/${project.image}`} alt="" />

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.text}</p>
        { project.link && (
          <a className="project-link" href="{project.link.href}">{project.link.text}</a>
        )}
        { project.file && (
          <a className="project-link" href={`/download/${project.file}`}>Download</a>
        )}
      </div>
    </div>
  </article>
);

export default class Header extends React.Component {
  render() {
    const { projects } = this.props;
    return (
      <section className="projects section-dark">
        <div className="container">

          <h2 className="heading">Projects</h2>
          <p className="subtitle">These are some of the projects I've worked on, both at university and in my spare time.</p>

          <div className="row">
            {projects.map(renderProject)}
          </div>
        </div>
      </section>
    );
  }
};
