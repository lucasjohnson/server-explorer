import React from 'react';
import Servers from './Servers';
import Sort from './Sort';

const Main: React.FC = () => (
  <main className="main">
    <Sort />
    <Servers />
  </main>
);

export default Main;
