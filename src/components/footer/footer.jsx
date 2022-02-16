import React from 'react';
import converter from 'number-to-words';
import { Link } from 'gatsby';
import FooterLinks from './footer-links';

const yearInWords = () => {
  const year = new Date().getFullYear().toString();
  const first = year.slice(0, 2);
  const second = year.slice(2, 4);
  return `${converter.toWords(first)}-${converter.toWords(second)}`;
};

const latestVersion = (changelog = []) =>
  changelog.length ? changelog[0].version : undefined;

export default ({ menuLinks = [], socialLinks = [], changelog }) => (
  <footer className="footer">
    <div className="container">
      <p className="footer-title">
        Ben Carr
        <br />
        Software Developer
      </p>

      <div className="footer-grid">
        <div className="footer-grid-left">
          <FooterLinks title="Menu" links={menuLinks} />
        </div>

        <div className="footer-grid-left">
          <FooterLinks title="Social" links={socialLinks} />
        </div>

        <div className="footer-grid-right">
          <p>Copyright &copy; {yearInWords()}</p>

          <p>
            {latestVersion(changelog)}
            <br />
            <Link to="/changelog" className="link-light">
              Changelog
            </Link>
          </p>
        </div>
      </div>
    </div>
  </footer>
);
