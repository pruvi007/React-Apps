import React, { Component } from "react";
class Search extends Component {
  state = {
    searchText: "",
  };
  addToParams(params, name, value) {
    // console.log(name, value);
    if (value != null && value.length > 0) {
      params = params ? params + "&" : "?";
      params = params + name + "=" + value;
    }
    return params;
  }
  handleSubmit = (e) => {
    e.preventDefault();
    let si = 0;
    let mr = 8;
    let params = "?searchText=" + this.state.searchText;
    params = this.addToParams(params, "startIndex", si.toString());
    params = this.addToParams(params, "maxResults", mr.toString());
    this.props.history.push({
      pathname: "/books",
      search: params,
    });
  };
  handleChange = (e) => {
    const { currentTarget: inp } = e;
    this.setState({ searchText: inp.value });
  };
  render() {
    return (
      <div className="container mt-3">
        <center>
          <img
            src="https://colterreed.com/wp-content/uploads/2015/10/Book-Search.jpg"
            style={{ width: "500px" }}
          />
        </center>
        <form onSubmit={this.handleSubmit}>
          <div className="row mt-5">
            <div className="col" style={{ marginLeft: "350px" }}>
              <input
                type="text"
                className="form-control"
                placeholder={" " + "Search your Book"}
                value={this.state.searchText}
                onChange={this.handleChange}
              />
            </div>
            <div className="col">
              <button className="btn btn-primary">Search</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
