import React from 'react';
import Input from './Input';
import Button from './Button';
import Copy from '../data/copy.json';

const Form: React.FC = () => (
  <form>
    <Input
      name={Copy.form.usernameInput.toLowerCase()}
      setUseState={null}
      label={Copy.form.usernameInput}
    />
    <Input
      name={Copy.form.passwordInput.toLowerCase()}
      setUseState={null}
      label={Copy.form.passwordInput}
    />
    <Button
      label={Copy.form.submitButton}
      setOnClick={null}
    />
  </form>
);

export default Form;
