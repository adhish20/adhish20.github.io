import React, { Component } from 'react';
import logo from './logo.svg';
import './logo.css';

class NavigationBar extends Component {
  render() {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="navbar-nav mr-auto">
                    <a className="navbar-brand" href="#">Adhish Singla</a>
                </div>
                <img src={logo} className="logo" alt="logo"/>
                <div className="navbar-nav ml-auto">
                    <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                    <a className="nav-item nav-link" href="#">Education</a>
                    <a className="nav-item nav-link" href="#">Achievements</a>
                    <a className="nav-item nav-link" href="#">Experience</a>
                    <a className="nav-item nav-link" href="#">Projects</a>
                    <a className="nav-item nav-link" href="#">Skills</a>
                    <a className="nav-item nav-link" href="#">Contact</a>
                </div>
            </div>
          </nav>
    );
  }
}

export default NavigationBar;
