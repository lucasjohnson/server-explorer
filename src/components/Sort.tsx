import React from 'react';
import ThemeContext from '../context/ThemeContext';
import Copy from '../data/copy.json';
import { SortOption } from '../utils/index';

const Sort: React.FC = () => {
  const options = [
    SortOption.NAME,
    SortOption.DISTANCE
  ];

  return (
    <ThemeContext.Consumer>
      {({ handleServerSort }) => (
        <nav className="sort">
          <label className="sort-label">{Copy.main.sortLabel}</label>
          <select className="sort-select" onChange={(event) => handleServerSort(event)}>
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
