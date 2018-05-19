import React from 'react';
import converter from 'number-to-words';

const yearInWords = () => {
  const year = new Date().getFullYear().toString();
  const first = year.slice(0, 2);
  const second = year.slice(2, 4);
  return `${converter.toWords(first)}-${converter.toWords(second)}`;
};

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
    <p>&copy; {yearInWords()}</p>
  </footer>
);
