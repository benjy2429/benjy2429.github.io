import React from 'react';

export default ({ socialLinks }) => (
  <footer className="footer section-dark">
    <ul className="social-links">
      {socialLinks.map(link => (
        <li key={link.name}>
          <a className="link-light" href={link.href}>
            {link.name}
          </a>
        </li>
      ))}
    </ul>
    <p>&copy; {new Date().getFullYear()} | Ben Carr</p>
  </footer>
);
