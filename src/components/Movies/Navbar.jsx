import React, { Component } from "react";
import Svg from "./config.svg";
import { Link } from "react-router-dom";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="container col-12">
        <nav>
          <div className="row bg-dark text-light">
            <div className="col-lg-2 col-4 mt-1 ml-1">
              <div className="logo nav-item" title="BookMyShow">
                <img src={Svg} alt="" />
              </div>
            </div>
            <div className="col-lg-5 col-4 mt-1 text-right">
              <form
                className="form-inline ng-untouched ng-pristine ng-valid"
                // role="form"
              >
                <input
                  aria-label="Search"
                  className="form-control form-control-sm fas ng-untouched ng-pristine ng-valid"
                  id="search"
                  name="search"
                  placeholder="Search for Movies"
                  style={{ fontStyle: "normal" }}
                  //  <i className="fa fa-heart"/>
                  type="text"
                  size="70"
                />
                {/* </i> */}
              </form>
            </div>
            <div className="col-2 mt-1 text-right d-none d-md-block">
              <div
                className="nav-link dropdown-toggle ml-5"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                style={{ cursor: "pointer" }}
              >
                {/* {this.props.match.params} */}
                NCR
              </div>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <Link className="dropdown-item" to="/NCR">
                  NCR
                </Link>
                <Link className="dropdown-item" to="/Ahmedabad">
                  Ahmedabad
                </Link>
                <Link className="dropdown-item" to="/Banglore">
                  Banglore
                </Link>
                <Link className="dropdown-item" to="/Chennai">
                  Chennai
                </Link>
                <Link className="dropdown-item" to="/Mumbai">
                  Mumbai
                </Link>
              </div>
            </div>
            <div className="col-1 mt-3 text-right d-none d-md-block">
              <div> English </div>
            </div>
            <div className="col-1 text-right mt-3 d-none d-md-block">
              <button className="btn btn-outline-light btn-sm">Sign In</button>
            </div>
          </div>
          <div className="row bg-dark text-light" style={{ fontSize: "14px" }}>
            <div className="col-2 text-center">Movies</div>
            <div className="col-2 text-center">Events</div>
            <div className="col-lg-2 col-2 text-center">Plays</div>
            <div className="col-2 text-center">Activities</div>
            <div className="col-2 text-center">Fanhood</div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
