import React from 'react';
import { Link } from 'gatsby';

const renderAnchor = (name, href) => (
  <a href={href} className="link-light">
    {name}
  </a>
);

const renderLink = (name, href) => (
  <Link to={href} className="link-light">
    {name}
  </Link>
);

export default ({ title, links }) => (
  <div>
    <h3 className="footer-links-title">{title}</h3>
    <ul className="footer-links">
      {links.map(({ name, href }) => (
        <li key={name}>
          {/^http/.test(href)
            ? renderAnchor(name, href)
            : renderLink(name, href)}
        </li>
      ))}
    </ul>
  </div>
);
