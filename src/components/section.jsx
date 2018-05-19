import React from 'react';

const renderElement = ({ type, title, href, text }, index) => {
  if (type === 'project') {
    return (
      <div key={`section-${index}`} className="project-link">
        <a href={href}>Find out more about {title}</a>
      </div>
    );
  }
  return (
    <p key={`section-${index}`} dangerouslySetInnerHTML={{ __html: text }} />
  );
};

export default ({ sectionTitle, content }) => (
  <section className="section">
    <div className="row">
      <div className="sidebar col col-3 col-12-m">
        <h2 className="section-title">{sectionTitle}</h2>
      </div>

      <div className="content col col-9 col-12-m">
        {content.map(renderElement)}
      </div>
    </div>
  </section>
);
