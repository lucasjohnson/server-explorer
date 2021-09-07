import React, { useEffect, useState } from 'react';
import { Aria, Cookie, CookieName, Credentials, Errors, QueryApi, Server } from '../utils/index';

const dafaultState = {
  errors: {username: false, password: false},
  handleFormSubmit: (): void => {}
};

const ThemeContext = React.createContext(dafaultState);

const ThemeProvider: React.FC = ({ children }) => {
  const [credentials, setCredentials] = useState<Credentials>({username: '', password: ''});
  const [errors, setErrors] = useState<Errors>({username: false, password: false});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [data, setData] = useState<Array<Server | null>>([]);

  // username: tesonet
  // password: partyanimal

  const handleFormSubmit = (event: MouseEvent, data: Credentials): void => {
    event.preventDefault();

    Object.keys(data).forEach(key => {
      setErrors(prevItem => ({
        ...prevItem,
        [key]: data[key].length === 0
      }));
    });

    setCredentials(data);
    setSubmitted(true);
  };

  const handleTokenQuery = (): void => {
    if (submitted && credentials.username.length > 0 && credentials.password.length > 0) {
      QueryApi.token(credentials);
    };

    setSubmitted(false);
  };

  const handleDataQuery = (): void => {
    const portal: HTMLElement = document.getElementById('portal');
    portal.setAttribute(Aria.HIDDEN, Aria.TRUE);
    QueryApi.data(setData);
  };

  useEffect(() => {
    Cookie.getToken().length > 0
      ? handleDataQuery()
      : handleTokenQuery();
  }, [submitted]);

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
