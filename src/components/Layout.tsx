import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';
import Portal from './Portal';

const Layout: React.FC = ({ children }) => (
  <div className="app" aria-hidden="true">
    <Header />
    {children}
    <Footer />
    <Portal>
      <Form />
    </Portal>
  </div>
);

export default Layout;
