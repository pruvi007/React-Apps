import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./navBar";
import Details from "./details";
import Player from "./player";
class Main extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar />
        <Route
          path="/sporticons/stars/:sport?"
          render={(props) => (
            <Details {...props} key={Math.floor(Math.random() * 10)} />
          )}
        />
        <Route
          path="/sporticons/details/:id"
          render={(props) => (
            <Player {...props} key={Math.floor(Math.random() * 10)} />
          )}
        />
        <Redirect to="/sporticons/stars" />
      </div>
    );
  }
}

export default Main;
