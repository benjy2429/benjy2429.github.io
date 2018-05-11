import React from 'react';

export default class Header extends React.Component {
  render() {
    const { socialLinks } = this.props;
    return (
      <footer className="footer section-dark">
        <ul className="social-links">
          {socialLinks.map(link => (
            <li key={link.name}>
              <a className="link-light" href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
        <p>&copy; {new Date().getFullYear()} | Ben Carr</p>
      </footer>
    );
  }
};
