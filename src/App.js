import React, { Component } from 'react';
import Header from './Header/header';
import Content from './Content/content';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
