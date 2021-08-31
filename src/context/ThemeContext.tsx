import React from 'react';

const dafaultState = {};

const ThemeContext = React.createContext(dafaultState);

const ThemeProvider: React.FC = ({ children }) => {
  const test: string = 'hello world';
  return (
    <ThemeContext.Provider
      value={{}}
    >
      { children }
    </ThemeContext.Provider>
  );
};

export default ThemeContext;

export { ThemeProvider };
