import React, { Component } from "react";
import logo from "./assets/LOGOTYP.svg";
import './Navbar.css';
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar-custom navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="#">
          <img id="logo" src={logo} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                JOHANNA <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/test">
                About me
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Something
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;