import React, { Component } from 'react';
import './header.scss';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <nav className="header-navigation">
                    <div className="header-navigation-content">
                        <a className="header-navigation-content__logo" href="/"><img src={'images/anipoll-icon-small.jpg'} alt="logo" /></a>
                        <ul className="header-navigation-content-list">
                            <li className="header-navigation-content-list__item"><a href="/">Home</a></li>
                            <li className="header-navigation-content-list__item"><a href="/Polls/polls.html">Polls</a></li>
                            <li className="header-navigation-content-list__item"><a href="/Results/results.html">Results</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;