import React, { Component } from "react";

import Search from "./Search";
import Navbar from "./navbar";
import { Route, Redirect } from "react-router-dom";
import Books from "./books";
class Details extends Component {
  state = {
    view: 0,
    searchText: "",
  };
  handleSubmit = (data) => {
    console.log(data);
    this.setState({ searchText: data });
  };
  render() {
    return (
      <div className="conatainer">
        <Navbar />
        <Route
          path="/books"
          render={(props) => (
            <Books
              {...props}
              key={Math.floor(Math.random() * 10)}
              onSubmitListener={this.handleSubmit}
            />
          )}
        />
        <Route
          path="/"
          exact
          render={(props) => (
            <Search {...props} key={Math.floor(Math.random() * 10)} />
          )}
        />
        <Redirect to="/" />
      </div>
    );
  }
}

export default Details;
