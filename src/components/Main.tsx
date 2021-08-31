import React from 'react';
import ThemeContext from '../context/ThemeContext';

const Main: React.FC = () => {
  return (
    <ThemeContext.Consumer>
      {({}) => (
          <main className="main"></main>
      )}
    </ThemeContext.Consumer>
  );
};

export default Main;
