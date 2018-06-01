import React from 'react';
import Project from './project';

export default ({ projects = [] }) => (
  <section className="projects">
    <div className="container">
      <h2 id="projects">Projects</h2>
      <p>
        These are some of the projects I&#8217;ve worked on, both at university
        and in my spare time.
      </p>

      <div className="projects-wrapper">
        {projects.map(project => <Project key={project.title} {...project} />)}
      </div>
    </div>
  </section>
);
