import React from 'react';
import Copy from '../data/copy.json';

const Header: React.FC<HeaderProps> = () => (
  <header className="header">
    <h1 className="header-title">{Copy.header.siteTitle}</h1>
  </header>
)

export default Header
