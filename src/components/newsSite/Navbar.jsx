import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-danger">
          <Link className="navbar-brand" to="/home">
            <b>NewsSite</b>
          </Link>
          <div className="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link
                  to="/home?q=sports&page=1"
                  className="nav-link  text-light"
                >
                  Sports
                </Link>
              </li>
              <li className="navbar-item">
                <Link
                  to="/home?q=cricket&page=1"
                  className="nav-link  text-light"
                >
                  Cricket
                </Link>
              </li>
              <li className="navbar-item">
                <Link
                  to="/home?q=movies&page=1"
                  className="nav-link  text-light"
                >
                  Movies
                </Link>
              </li>
              <li className="navbar-item">
                <Link
                  to="/home?q=education&page=1"
                  className="nav-link  text-light"
                >
                  Education
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
