import React from 'react';
import { Link } from 'gatsby';
import { MdSearch } from 'react-icons/md';
import HeaderStyles from '../styles/HeaderStyles';
import { menu } from '../constants/menu';
import Logo from './Logo';

function Header() {
  return (
    <HeaderStyles>
      <div className="container">
        <div className="logo">
          <Logo />
        </div>

        <div className="nav__wrapper">
          <nav>
            <ul>
              {menu.map((item) => (
                <li key={item.path}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              ))}
              <li className="searchIcon">
                <div className="searchIcon__wrapper">
                  <MdSearch />
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </HeaderStyles>
  );
}

export default Header;
