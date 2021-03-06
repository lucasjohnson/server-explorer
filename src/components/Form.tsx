import React, { useReducer } from 'react';
import ThemeContext from '../context/ThemeContext';
import Input from './Input';
import Button from './Button';
import Copy from '../data/copy.json';

const Form: React.FC = () => {
  const formReducer = (state, event) => ({
    ...state,
    [event.name]: event.value
  });

  const [data, setData] = useReducer(formReducer, {
    username: '',
    password: ''
  });

  const handleChange = (event: MouseEvent): void => {
    setData({
      name: event.target.name,
      value: event.target.value
    });
  };

  return (
    <ThemeContext.Consumer>
      {({ error, authentication, handleFormSubmit }) => (
        <div className="form">
          <h2 className="form-title">{Copy.form.formTitle}</h2>
          <form className="form-element">
            <Input
              name={Copy.form.usernameInput.toLowerCase()}
              setOnChange={handleChange}
              label={Copy.form.usernameInput}
            />
            <Input
              name={Copy.form.passwordInput.toLowerCase()}
              setOnChange={handleChange}
              label={Copy.form.passwordInput}
            />
            <Button
              label={Copy.form.submitButton}
              setOnClick={(event) => handleFormSubmit(event, data)}
            />
          </form>
          <div className="form-error">
            <span className="form-copy" aria-hidden={!error}>
              {Copy.form.authenticationError}
            </span>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default Form;
