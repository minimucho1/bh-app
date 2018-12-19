import React from 'react';
import { NavLink } from 'react-router-dom';

import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container grid-container">
        <a className="header-container__logo grid-33" href="/"><img src={'images/anination-icon-70.png'} alt="logo" /></a>
        <nav className="header-container__nav grid-66">
          <div className="header-container__nav-container grid-container">
            <NavLink className="header-container__nav-container__item grid-33" exact to="/" activeClassName="selected">Home</NavLink>
            <NavLink className="header-container__nav-container__item grid-33" to="/polls" activeClassName="selected">Polls</NavLink>
            <NavLink className="header-container__nav-container__item grid-33" to="/results" activeClassName="selected">Results</NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;