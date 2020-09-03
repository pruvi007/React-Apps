import React, { Component } from "react";
import queryString from "query-string";
import axios from "axios";
import Left from "./Left";

import {
  faArrowRight,
  faArrowLeft,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Search extends Component {
  state = {
    searchText:
      queryString.parse(this.props.location.search).q === undefined
        ? ""
        : queryString.parse(this.props.location.search).q,
    data: [],
    pageInfo: {},
  };

  addToParams(params, name, value) {
    // console.log(name, value);
    if (value !== undefined && value.length > 0) {
      params = params ? params + "&" : "?";
      params = params + name + "=" + value;
    }
    return params;
  }

  async componentDidMount() {
    let q = queryString.parse(this.props.location.search).q;
    let page = queryString.parse(this.props.location.search).page;
    let order_by = queryString.parse(this.props.location.search)["order-by"];
    let section = queryString.parse(this.props.location.search).section;

    let params = "";
    params = this.addToParams(params, "q", q);
    params = this.addToParams(params, "page", page);
    params = this.addToParams(params, "order-by", order_by);
    params = this.addToParams(params, "section", section);
    params = this.addToParams(params, "api-key", "test");

    let baseUrl = "https://content.guardianapis.com/search";
    let response = await axios.get(baseUrl + params);
    if (response != null) {
      console.log(response);
      const d = response.data.response;
      let pageInfo = {
        currentPage: d.currentPage,
        pageSize: d.pageSize,
        pages: d.pages,
        startIndex: d.startIndex,
        total: d.total,
      };

      this.setState({ data: d.results, pageInfo: pageInfo });
    }
  }

  addToUrl = (key, value) => {
    let params = "";
    for (var i = 0; i < key.length; i++)
      params = this.addToParams(params, key[i], value[i]);

    this.props.history.push({
      pathname: "/home",
      search: params,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let page = 1;
    let order_by = queryString.parse(this.props.location.search)["order-by"];
    let section = queryString.parse(this.props.location.search).section;
    this.addToUrl(
      ["q", "page", "api-key"],
      [this.state.searchText, page, "test"]
    );
  };
  handleChange = (e) => {
    const { currentTarget: inp } = e;
    this.setState({ searchText: inp.value });
  };
  goToPage = (x) => {
    let q = queryString.parse(this.props.location.search).q;
    let page = queryString.parse(this.props.location.search).page;
    let order_by = queryString.parse(this.props.location.search)["order-by"];
    let section = queryString.parse(this.props.location.search).section;

    let nextPage = 0;
    page = page === undefined ? 1 : parseInt(page);
    nextPage = parseInt(page) + parseInt(x);
    console.log(nextPage);
    this.addToUrl(
      ["q", "page", "order-by", "section", "api-key"],
      [q, nextPage.toString(), order_by, section, "test"]
    );
  };
  getButtons() {
    let start = this.state.pageInfo.currentPage;
    let totalPages = this.state.pageInfo.pages;

    let next = (
      <button
        className="btn btn-warning"
        onClick={() => this.goToPage(1)}
        style={{
          float: "right",
        }}
      >
        Next
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    );
    let prev = (
      <button
        className="btn btn-warning"
        onClick={() => this.goToPage(-1)}
        style={{
          float: "left",
        }}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
        Previous
      </button>
    );

    if (totalPages === 1 || totalPages == 0) return "";
    else if (start === 1) return next;
    else if (start >= totalPages) return prev;
    return (
      <div>
        {prev}
        {next}
      </div>
    );
  }

  render() {
    let buttons = this.getButtons();
    let total = this.state.pageInfo.total;
    let start =
      total === 0 ? 0 : (this.state.pageInfo.currentPage - 1) * 10 + 1;
    let end = total === 0 ? 0 : start + this.state.pageInfo.pageSize - 1;
    end = end >= total ? total : end;

    return (
      <div>
        <div className="container col-12 row">
          <div className="container col-3">
            <Left
              search={this.props.location.search}
              addListener={this.addToUrl}
            />
          </div>
          <div className="container col-9">
            <form onSubmit={this.handleSubmit}>
              <div className="row" style={{ marginTop: "10px" }}>
                <div
                  className="col"
                  style={{ marginLeft: "100px", marginBottom: "10px" }}
                >
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.searchText}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="col">
                  <button className="btn btn-primary">Search</button>
                </div>
              </div>
            </form>
            Showing <b>{start}</b> to <b>{end}</b> of <b>{total}</b>
            <div className="container col-12 row">
              {this.state.data.length === 0 ? (
                <FontAwesomeIcon
                  icon={faSpinner}
                  className="fa-spin fa-2x fa-fw"
                />
              ) : (
                this.state.data.map((item, ind) => (
                  <div
                    className="col-2 m-1"
                    style={{
                      border: "1px solid black",
                      backgroundColor: "powderblue",
                      padding: "5px",
                      fontSize: "12px",
                    }}
                    key={ind}
                  >
                    {item.webTitle}
                    <br></br>
                    <b>
                      SOURCE : {item.sectionName}
                      <br></br>
                      {item.webPublicationDate}
                    </b>
                    <br></br>
                    <a href={item.webUrl}>
                      <u>Preview</u>
                    </a>
                  </div>
                ))
              )}
            </div>
            {buttons}
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
