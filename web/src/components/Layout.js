import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import Header from './Header';
import Footer from './footer';

function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
