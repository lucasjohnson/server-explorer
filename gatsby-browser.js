import React from 'react';
import { ThemeProvider } from './src/context/ThemeContext';
import 'normalize.css';
import './src/scss/global.scss';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);
