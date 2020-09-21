import React, { Component } from "react";
import {
  faCar,
  faPlus,
  faLeaf,
  faSignInAlt,
  faShoppingCart,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";
class NavBar extends Component {
  state = {};
  handleLogout = () => {
    this.props.onLogout();
  };
  render() {
    let user = this.props.isLogin;
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light text-dark">
          <Link className="navbar-brand" to="/">
            <FontAwesomeIcon
              className="fa fa-2x"
              icon={faLeaf}
              style={{ color: "green" }}
            />
          </Link>

          <div className="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="navbar-item" style={{ marginInline: 10 }}>
                <Link to="/shoppingCart" className="nav-link  text-light">
                  <FontAwesomeIcon
                    className="fa fa-2x"
                    icon={faShoppingCart}
                    style={{ color: "black" }}
                  />
                </Link>
              </li>
              <li className="navbar-item" style={{ fontSize: "25px" }}>
                <span class="badge badge-dark">{this.props.total}</span>
              </li>

              {this.props.isLogin === "" ? (
                <Link to="/login">
                  <li
                    className="navbar-item"
                    style={{ marginInline: 800, fontSize: "25px" }}
                  >
                    <span className="badge badge-light">
                      <FontAwesomeIcon
                        className="fa"
                        icon={faSignInAlt}
                        style={{
                          color: "black",
                          display: "inline",
                          marginInline: 8,
                        }}
                      />
                      LOGIN
                    </span>
                  </li>
                </Link>
              ) : (
                <li
                  className="navbar-item"
                  style={{ marginInline: 800, fontSize: "25px" }}
                >
                  <div>
                    <div className="dropdown">
                      <button
                        className="btn btn-light dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {user}
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <Link to="/orders">
                          <span class="dropdown-item">My Orders</span>
                        </Link>
                        <Link to="/manageOrders">
                          <span class="dropdown-item">Manage Orders</span>
                        </Link>
                        <div class="dropdown-divider"></div>
                        <span
                          class="dropdown-item"
                          onClick={() => this.handleLogout()}
                          style={{ cursor: "pointer" }}
                        >
                          Logout{" "}
                          <FontAwesomeIcon
                            icon={faSignOutAlt}
                            style={{ color: "red" }}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
