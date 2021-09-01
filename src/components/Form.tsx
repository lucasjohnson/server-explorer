import React, { useReducer, useState } from 'react';
import Input from './Input';
import Button from './Button';
import Copy from '../data/copy.json';

const Form: React.FC = () => {
  const formReducer = (state, event) => {
    return {
      ...state,
      [event.name]: event.value
    };
  };

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

  const handleSubmit = (event: MouseEvent): void => {
    event.preventDefault();
  };

  return (
    <form className="form">
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
        setOnClick={handleSubmit}
      />
    </form>
  );
};

export default Form;
