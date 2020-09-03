import React, { Component } from "react";

import Navbar from "./Navbar";
import { Route, Redirect } from "react-router-dom";
import Search from "./mainComp";
class Home extends Component {
  state = {};

  render() {
    return (
      <div>
        <Navbar />
        <div className="col-12 row">
          {/* <div className="col-9"> */}
            <Route
              path="/home"
              render={(props) => (
                <Search {...props} key={Math.floor(Math.random() * 10)} />
              )}
            />
            <Redirect to="/home" />
          {/* </div> */}
        </div>
      </div>
    );
  }
}

export default Home;
