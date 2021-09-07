import React, { useState } from 'react';

const dafaultState = {
  errors: {username: false, password: false},
  handleFormSubmit: (): void => {}
};

const ThemeContext = React.createContext(dafaultState);

interface Errors {
  username: boolean;
  password: boolean;
};

const ThemeProvider: React.FC = ({ children }) => {
  const [errors, setErrors] = useState<Errors>({username: false, password: false});

  const handleFormSubmit = (event: MouseEvent, data: any): void => {
    event.preventDefault();

    Object.keys(data).forEach(key => {
      setErrors(prevItem => ({
        ...prevItem,
        [key]: data[key].length === 0
      }));
    });
  };

  return (
    <ThemeContext.Provider
      value={{
        errors,
        handleFormSubmit
      }}
    >
      { children }
    </ThemeContext.Provider>
  );
};

export default ThemeContext;

export { ThemeProvider };
