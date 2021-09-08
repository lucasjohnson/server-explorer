import React from 'react';
import Anchor from './Anchor';
import Copy from '../data/copy.json';

const Footer: React.FC = () => (
  <footer className="footer">
    <nav className="footer-navigation">
      <Anchor
        title={Copy.footer.githubTitle}
        url={Copy.footer.githubUrl}
      />
    </nav>
  </footer>
);

export default Footer;
