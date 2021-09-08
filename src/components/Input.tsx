import React from 'react';

interface Props {
  name: string;
  setOnChange: () => void;
  label: string;
  errors: string[];
  errorMessage: string;
};

const Input: React.FC<Props> = ({ name, label, setOnChange, errors, errorMessage }) => (
  <React.Fragment>
    <label className="label">{label}</label>
    <input
      className={`input${errors[name] === true ? ' hasError' : ''}`}
      type="text"
      name={name}
      onChange={setOnChange}
      autoComplete="off"
    />
    <span className="error" aria-hidden={!errors[name]}>{errorMessage}</span>
  </React.Fragment>
);

export default Input;
