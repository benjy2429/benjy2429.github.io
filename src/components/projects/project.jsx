import React from 'react';

export default ({ title, image, text, link, file }) => (
  <article className="project">
    <img className="project-image" src={`/assets/projects/${image}`} alt="" />

    <div className="project-content">
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{text}</p>
      {link && (
        <a className="project-link" href={link.href}>
          {link.text}
        </a>
      )}
      {file && (
        <a className="project-link" href={`/download/${file}`}>
          Download
        </a>
      )}
    </div>
  </article>
);
