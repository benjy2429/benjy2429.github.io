import React from 'react';

export default ({ title, image, text, tags, link, file }) => (
  <article className="project">
    <img className="project-image" src={`/assets/projects/${image}`} alt="" />

    <div className="project-content">
      <h3 className="project-title">{title}</h3>
      {tags &&
        tags.map(tag => (
          <div key={`${title}-${tag}`} className="project-tag">
            {tag}
          </div>
        ))}
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
