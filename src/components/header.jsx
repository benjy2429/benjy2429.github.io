import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <section className="hero center-all">
        <div className="hero-content center-all-inner">
          <h1 className="name">
            <span className="first">Ben</span><span className="surname">Carr</span>
          </h1>
          <div className="job-title">
            Software Developer
          </div>
        </div>
        <a data-scroll href="#about" className="chevron link-unstyled"></a>
      </section>
    );
  }
};
