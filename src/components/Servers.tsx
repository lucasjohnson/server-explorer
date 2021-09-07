import React from 'react';
import ThemeContext from '../context/ThemeContext';
import Copy from '../data/copy.json';

const Servers: React.FC = () => (
  <ThemeContext.Consumer>
    {({ data }) => (
      <section className="servers">
        <h2 className="servers-title">
          <span className="servers-title-name">{Copy.main.titleName}</span>
          <span className="servers-title-distance">{Copy.main.titleDistance}</span>
        </h2>
        <ul className="servers-list">
          {data.length > 0 &&
            data.map((server, key) => (
              <li className="servers-item" key={key}>
                <span className="servers-name">{server.name}</span>
                <span className="servers-distance">{server.distance}</span>
              </li>
            ))
          }
        </ul>
      </section>
    )}
  </ThemeContext.Consumer>
);

export default Servers;
