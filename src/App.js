import React, { Component } from 'react';
import logo from './logo.svg';
import NavigationBar from './navigationBar';
import Profile from './Profile';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Profile />
        <NavigationBar />
      </div>
    );
  }
}

export default App;
