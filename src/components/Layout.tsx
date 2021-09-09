import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';
import Preloader from './Preloader';
import Portal from './Portal';

const Layout: React.FC = ({ children }) => (
  <div className="app">
    <Header />
    {children}
    <Footer />
    <Preloader />
    <Portal>
      <Form />
    </Portal>
  </div>
);

export default Layout;
