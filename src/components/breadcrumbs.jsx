import React from 'react';
import Link from 'gatsby-link';

export default ({ crumbs = [] }) =>
  !crumbs.length ? null : (
    <ul className="breadcrumbs">
      <li className="breadcrumb">
        <Link to="/">Home</Link>
      </li>
      {crumbs.map(({ name, href }) => (
        <li key={`crumb-${name}`} className="breadcrumb">
          {href ? <Link to={href}>{name}</Link> : name}
        </li>
      ))}
    </ul>
  );
