import React from 'react';
import converter from 'number-to-words';

const yearInWords = () => {
  const year = new Date().getFullYear().toString();
  const first = year.slice(0, 2);
  const second = year.slice(2, 4);
  return `${converter.toWords(first)}-${converter.toWords(second)}`;
};

export default ({ socialLinks }) => (
  <footer className="footer">
    <div className="container">
      <p className="footer-title">
        Ben Carr
        <br />
        Software Developer
      </p>

      <div className="footer-grid">
        <div className="footer-grid-left">
          <h3 className="footer-links-title">Menu</h3>
          <ul className="footer-links">
            <li>
              <a href="#work" className="link-light">
                Work
              </a>
            </li>
            <li>
              <a href="#education" className="link-light">
                Education
              </a>
            </li>
            <li>
              <a href="#projects" className="link-light">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="link-light">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-grid-left">
          <h3 className="footer-links-title">Social</h3>
          <ul className="footer-links">
            {socialLinks.map(link => (
              <li key={link.name}>
                <a href={link.href} className="link-light">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-grid-right">
          Copyright &copy; {yearInWords()}
          {false && (
            <React.Fragment>
              <br />
              v1.1-alpha
              <br />
              <a href="/">Changelog</a>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  </footer>
);
