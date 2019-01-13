import React from 'react';
import Link from 'gatsby-link';

export default () => (
  <section id="formerror" className="container container-flush">
    <div className="center-all full-height">
      <div className="center-all-inner">
        <h1 className="title">Oh no!</h1>
        <p className="message">Something went wrong. Please try again later.</p>
        <Link to="/">Back home</Link>
      </div>
    </div>
  </section>
);
