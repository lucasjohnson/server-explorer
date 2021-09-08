import React, { useEffect, useState } from 'react';
import { Aria, Cookie, Credentials, Errors, QueryApi, Server, Sort } from '../utils/index';

const dafaultState = {
  errors: {username: false, password: false},
  authentication: true,
  handleFormSubmit: (): void => {},
  handleServerSort: (): void => {},
  servers: [],
};

const ThemeContext = React.createContext(dafaultState);

const ThemeProvider: React.FC = ({ children }) => {
  const [credentials, setCredentials] = useState<Credentials>({username: '', password: ''});
  const [errors, setErrors] = useState<Errors>({username: false, password: false});
  const [authentication, setAuthentication] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [servers, setServers] = useState<(Server | null)[]>([]);
  const [sorted, setSorted] = useState<(Server | null)[]>([]);

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
      QueryApi.token(credentials, setAuthentication, setSorted);
    };
  };

  const handleDataQuery = (): void => {
    const overlay = document.querySelector('.overlay') as HTMLElement;
    overlay.setAttribute(Aria.HIDDEN, Aria.TRUE);
    QueryApi.data(setSorted);
  };

  const handleServerSort = (event: React.ChangeEvent<HTMLSelectElement>): void =>
    setSorted(Sort.object(event.target.value, servers));

  useEffect(() => {
    if (submitted || Cookie.getToken().length > 0) {
      Cookie.getToken().length > 0
        ? handleDataQuery()
        : handleTokenQuery();
    };

    setSubmitted(false);
    setAuthentication(false);
  }, [submitted]);

  useEffect(() => {
    setServers([...sorted]);
  }, [sorted]);

  return (
    <ThemeContext.Provider
      value={{
        errors,
        authentication,
        handleFormSubmit,
        handleServerSort,
        servers,
      }}
    >
      { children }
    </ThemeContext.Provider>
  );
};

export default ThemeContext;

export { ThemeProvider };
