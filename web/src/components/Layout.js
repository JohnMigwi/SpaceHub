import React from 'react';
import Header from './Header';
import GlobalStyles from '../styles/GlobalStyles';
import 'normalize.css/normalize.css';
import Footer from './Footer';
// import Search from './search/SearchModal';
import { SearchModalContextProvider } from '../context/searchModalContext';

function Layout({ children }) {
  return (
    <SearchModalContextProvider>
      <GlobalStyles />

      <Header />
      <main>{children}</main>
      <Footer />
    </SearchModalContextProvider>
  );
}

export default Layout;
