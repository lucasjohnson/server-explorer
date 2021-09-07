import React from 'react';
import ThemeContext from '../context/ThemeContext';
import Select from './Sort';
import Copy from '../data/copy.json';
import { SortOptions } from '../utils/index';

const Sort: React.FC = () => {
  const options = [
    SortOptions.NAME,
    SortOptions.DISTANCE
  ];

  return (
    <ThemeContext.Consumer>
      {({ handleServerSort }) => (
        <nav className="sort">
          <select value={Sort.NAME} className="sort-select" onChange={(event) => handleServerSort(event)}>
            {options.map((option, key) => (
                <option value={option} key={key}>
                  {option}
                </option>
            ))}
          </select>
        </nav>
      )}
    </ThemeContext.Consumer>
  );
};

export default Sort;
