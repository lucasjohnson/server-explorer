import React, { useEffect, useState } from 'react';

const dafaultState = {
  errors: {username: false, password: false},
  handleFormSubmit: (): void => {}
};

const ThemeContext = React.createContext(dafaultState);

interface Credentials {
  username: string;
  password: string;
};

interface Errors {
  username: boolean;
  password: boolean;
};

const ThemeProvider: React.FC = ({ children }) => {
  const [credentials, setCredentials] = useState<Credentials>({username: '', password: ''});
  const [errors, setErrors] = useState<Errors>({username: false, password: false});
  const [submitted, setSubmitted] = useState<boolean>(false);

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

  useEffect(() => {
    if (submitted && credentials.username.length > 0 && credentials.password.length > 0) {
      fetch("https://playground.tesonet.lt/v1/tokens", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.error(error);
        });
    };

    setSubmitted(false);
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
