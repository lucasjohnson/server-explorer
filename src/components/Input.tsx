import React from 'react';

interface Props {
  name: string;
  setUseState: () => void;
  label: string;
};

const Input: React.FC<Props> = ({ name, setUseState, label }) => (
  <React.Fragment>
    <label className="label">{label}</label>
    <input
      className="input"
      type="text"
      name={name}
      onChange={(event) => setUseState(event)}
      autoComplete="off"
    />
  </React.Fragment>
);

export default Input;
