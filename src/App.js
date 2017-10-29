import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar.js";
import Main from "./Main.js";

class App extends Component {
  render() {
    return (
      <div>
      <Navbar />
      <Main />
      </div>
    );
  }
}

export default App;
