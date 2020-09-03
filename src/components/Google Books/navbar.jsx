import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg  bg-dark text-light">
          <Link className="nvbar-brand" to="/">
            <img
              src="https://image.flaticon.com/icons/svg/29/29302.svg"
              className="imgNavbar"
              style={{ width: "40px" }}
            />
          </Link>
          <div className="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <div
                  className="nav-link dropdown-toggle ml-5"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  style={{ cursor: "pointer" }}
                >
                  Options
                </div>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <Link
                    className="dropdown-item"
                    to="/books?searchText=Harry Potter&startIndex=0&maxResults=8"
                  >
                    Harry Potter Books
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/books?searchText=Agatha Christie&startIndex=0&maxResults=8"
                  >
                    Books By Agatha Christie
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/books?searchText=Premchand&startIndex=0&maxResults=8"
                  >
                    Books By Premchand
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/books?searchText=Jane&startIndex=0&maxResults=8"
                  >
                    Love Stories By Jane
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/books?searchText=Lincoln&startIndex=0&maxResults=8"
                  >
                    Biography By Lincoln
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
