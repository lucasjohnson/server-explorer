import React, { useEffect, useState } from 'react';
import { Cookie, Credentials, QueryApi, Server, Sort } from '../utils/index';

const dafaultState = {
  error: false,
  handleFormSubmit: (): void => {},
  handleServerSort: (): void => {},
  servers: [],
};

const ThemeContext = React.createContext(dafaultState);

const ThemeProvider: React.FC = ({ children }) => {
  const [credentials, setCredentials] = useState<Credentials>({username: '', password: ''});
  const [error, setError] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [servers, setServers] = useState<(Server | null)[]>([]);
  const [sorted, setSorted] = useState<(Server | null)[]>([]);

  const handleFormSubmit = (event: MouseEvent, data: Credentials): void => {
    event.preventDefault();
    setCredentials(data);
    setSubmitted(true);
  };;

  const handleServerSort = (event: React.ChangeEvent<HTMLSelectElement>): void =>
    setSorted(Sort.object(event.target.value, servers));

  useEffect(() => {
    if (submitted || Cookie.getToken().length > 0) {
      Cookie.getToken().length > 0
        ? QueryApi.data(setSorted)
        : QueryApi.token(credentials, setError, setSorted);
    };

    setSubmitted(false);
  }, [submitted]);

  useEffect(() => {
    setServers([...sorted]);
  }, [sorted]);

  return (
    <ThemeContext.Provider
      value={{
        error,
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
