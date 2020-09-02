import React, { Component } from "react";
import { faCar, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-danger text-light">
          <a className="navbar-brand" href="">
            <b>
              <font color="white">Car SHOWROOM</font>
            </b>
          </a>

          <div className="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="navbar-item" style={{ marginInline: 1030 }}>
                <Link to="/car" className="nav-link  text-light">
                  <FontAwesomeIcon
                    className="fa fa-2x"
                    icon={faPlus}
                    style={{ display: "inline-block" }}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
