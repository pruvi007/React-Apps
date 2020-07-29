import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">
            Sports STAR
          </Link>
          <div className="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/sporticons/stars" className="nav-link">
                  ALL
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/sporticons/stars/Cricket" className="nav-link">
                  CRICKET
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/sporticons/stars/Football" className="nav-link">
                  FOOTBALL
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
