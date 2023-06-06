import React from 'react';
import { Link } from 'gatsby';
import { menu } from '../constants/menu';
import { FooterStyles } from '../styles/FooterStyles';
import Logo from './Logo';

import ParagraphText from './typography/ParagraphText';
import { Socials } from '../constants/Socials';

function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <Logo />
        <ParagraphText className="footer__text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </ParagraphText>
        <ul className="footer__menuList">
          {menu.map((item) => (
            <li key={item.path}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <ul className="footer__socialList">
          {Socials.map((item) => (
            <li key={item.name}>
              <a href={item.url}>{item.icon}</a>
            </li>
          ))}
        </ul>
        <ParagraphText className="copy">
          Space-Hub inspired by Space-X {new Date().getFullYear()} © John Migwi
          Migwi Wanjema
        </ParagraphText>
      </div>
    </FooterStyles>
  );
}

export default Footer;
