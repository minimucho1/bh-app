import React, { Component } from 'react';
import './header.scss';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="header-container">
                        <a className="header-container__logo" href="/"><img src={'images/anination-icon-70.png'} alt="logo" /></a>
                        <nav className="header-container__nav">
                            <div className="header-container__nav-container">
                                    <button className="header-container__nav-container__item"><a href="/">Home</a></button>
                                    <button className="header-container__nav-container__item"><a href="/Polls/polls.html">Polls</a></button>
                                    <button className="header-container__nav-container__item"><a href="/Results/results.html">Results</a></button>
                            </div>
                        </nav>
                </div>
            </header>
        );
    }
}

export default Header;