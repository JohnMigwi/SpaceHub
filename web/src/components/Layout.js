import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import Header from './Header';
import Footer from './footer';
import { SearchModalContextProvider } from '../context/searchModalContext';
import Search from './search/SearchModal';

function Layout({ children }) {
  return (
    <SearchModalContextProvider>
      <GlobalStyles />
      <Header />
      {children}
      <Footer />
    </SearchModalContextProvider>
  );
}

export default Layout;
