import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';
import './header.scss';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="header-container">
                        <a className="header-container__logo" href="/"><img src={'images/anination-icon-70.png'} alt="logo" /></a>
                        <nav className="header-container__nav">
                            <div className="header-container__nav-container">
                                <NavLink className="header-container__nav-container__item" exact to="/" activeClassName="selected">Home</NavLink>
                                <NavLink className="header-container__nav-container__item" to="/polls" activeClassName="selected">Polls</NavLink>
                                <NavLink className="header-container__nav-container__item" to="/results" activeClassName="selected">Results</NavLink>
                            </div>
                        </nav>
                </div>
            </header>
        );
    }
}

export default Header;