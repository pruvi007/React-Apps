import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {};
  render() {
    let sel = this.props.selectedGenre;
    sel = sel === undefined ? "Books by Genre" : sel;
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/booksapp/books">
            Book SITE
          </Link>
          <div className="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/booksapp/books?newarrival=yes" className="nav-link">
                  New Arrivals
                </Link>
              </li>
              <li className="nav-item dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                >
                  <span id="selected">{sel}</span>
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <Link className="dropdown-item" to="/booksapp/books/Fiction">
                    Fiction
                  </Link>
                  <Link className="dropdown-item" to="/booksapp/books/Mystery">
                    Mystery
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/booksapp/books/Self Help"
                  >
                    Self Help
                  </Link>
                  <Link className="dropdown-item" to="/booksapp/books/Children">
                    Children
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/booksapp/books/Management"
                  >
                    Management
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link to="/booksapp/books" className="nav-link">
                  All Books
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
      </div>
    );
  }
}

export default Navbar;
