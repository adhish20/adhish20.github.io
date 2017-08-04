import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './navigationBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to my Website</h2>
        </div>
      </div>
    );
  }
}

export default App;
