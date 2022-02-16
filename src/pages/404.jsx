import React from 'react';
import { Link } from 'gatsby';

export default () => (
  <section id="not-found" className="container container-flush">
    <div className="center-all full-height">
      <div className="center-all-inner">
        <h1 className="status-code">404</h1>
        <p className="message">Looks like you&#8217;re lost!</p>
        <Link to="/">Back home</Link>
      </div>
    </div>
  </section>
);
