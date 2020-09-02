import React, { Component } from "react";
import NavBar from "./navbar";

import { Redirect, Route } from "react-router-dom";
import AddCar from "./addcar";
import EditCar from "./editcar";
import Cars from "./cars";
class MainComp extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="container"></div>
        <NavBar />

        <Route
          path="/cars"
          exact
          render={(props) => (
            <Cars {...props} key={Math.floor(Math.random() * 10)} />
          )}
        />
        <Route
          path="/car"
          exact
          render={(props) => (
            <AddCar {...props} key={Math.floor(Math.random() * 10)} />
          )}
        />
        <Route
          path="/car/:id"
          exact
          render={(props) => (
            <EditCar {...props} key={Math.floor(Math.random() * 10)} />
          )}
        />
        <Redirect to="/cars" />
      </div>
    );
  }
}

export default MainComp;
