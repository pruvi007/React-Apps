import React, { Component } from "react";

import Navbar from "./navBar";
import { Route, Redirect } from "react-router-dom";
import Books from "./books";
class Main extends Component {
  state = {};

  makeRadioStructure() {}
  render() {
    return (
      <div>
        <Route
          path="/booksapp/books/:category?"
          render={(props) => (
            <Books {...props} key={Math.floor(Math.random() * 10)} />
          )}
        />
        <Redirect to="/booksapp/books" />
      </div>
    );
  }
}

export default Main;
