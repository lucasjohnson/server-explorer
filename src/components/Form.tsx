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
      {({ errors, authentication, handleFormSubmit }) => (
        <div className="form">
          <h2 className="form-title">{Copy.form.formTitle}</h2>
          <form className="form-element">
            <p>username: tesonet</p>
            <p>password: partyanimal</p>
            <Input
              name={Copy.form.usernameInput.toLowerCase()}
              setOnChange={handleChange}
              label={Copy.form.usernameInput}
              errors={errors}
              errorMessage={Copy.form.usernameError}
            />
            <Input
              name={Copy.form.passwordInput.toLowerCase()}
              setOnChange={handleChange}
              label={Copy.form.passwordInput}
              errors={errors}
              errorMessage={Copy.form.passwordError}
            />
            <Button
              label={Copy.form.submitButton}
              setOnClick={(event) => handleFormSubmit(event, data)}
            />
          </form>
          <div className="form-error">
            <span className="form-copy" aria-hidden={!authentication}>{Copy.form.authenticationError}</span>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default Form;
