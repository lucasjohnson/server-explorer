import React from 'react';

interface Props {
  name: string;
  setOnChange: () => void;
  label: string;
};

const Input: React.FC<Props> = ({ name, label, setOnChange }) => (
  <React.Fragment>
    <label className="label">{label}</label>
    <input
      className="input"
      type="text"
      name={name}
      onChange={setOnChange}
      autoComplete="off"
    />
  </React.Fragment>
);

export default Input;
