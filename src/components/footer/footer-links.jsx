import React from 'react';

export default ({ title, links }) => (
  <div>
    <h3 className="footer-links-title">{title}</h3>
    <ul className="footer-links">
      {links.map(({ name, href }) => (
        <li key={name}>
          <a href={href} className="link-light">
            {name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);
