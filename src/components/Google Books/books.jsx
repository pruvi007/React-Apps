import React, { Component } from "react";
import queryString from "query-string";
import axios from "axios";
import LeftPanel from "./left";
import config from "./config.json";

import {
  faArrowRight,
  faArrowLeft,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Books extends Component {
  state = {
    data: [],
    totalItems: 0,

    radio: [
      {
        type: "LangRadio",
        name: ["English", "French", "Hindi"],
        selected:
          config.map[
            queryString.parse(this.props.location.search).langRestrict ===
            undefined
              ? ""
              : queryString.parse(this.props.location.search).langRestrict
          ],
      },
      {
        type: "BookRadio",
        name: ["Full Volume", "Free Google E-Books", "Paid Google e-books"],
        selected:
          config.map[
            queryString.parse(this.props.location.search).filter === undefined
              ? ""
              : queryString.parse(this.props.location.search).filter
          ],
      },
    ],
  };
  async componentDidMount() {
    let st = queryString.parse(this.props.location.search).searchText;
    let baseUrl = config.base;
    let si = queryString.parse(this.props.location.search).startIndex;
    let mr = queryString.parse(this.props.location.search).maxResults;
    let langRestrict = queryString.parse(this.props.location.search)
      .langRestrict;
    if (langRestrict === undefined) langRestrict = "";
    let filter = queryString.parse(this.props.location.search).filter;
    if (filter === undefined) filter = "";

    let params = "";
    params = this.addToParams(params, "q", st);
    params = this.addToParams(params, "startIndex", si.toString());
    params = this.addToParams(params, "maxResults", mr.toString());
    params = this.addToParams(params, "langRestrict", langRestrict);
    params = this.addToParams(params, "filter", filter);
    // console.log(baseUrl + params);
    let response = await axios.get(baseUrl + params);
    if (response !== null) {
      console.log(response);
      this.setState({
        data: response.data.items,
        totalItems: response.data.totalItems,
      });
    }
  }

  addToParams(params, name, value) {
    // console.log(name, value);
    if (value != null && value.length > 0) {
      params = params ? params + "&" : "?";
      params = params + name + "=" + value;
    }
    return params;
  }

  addToUrl = (key, value) => {
    let params = "";
    for (var i = 0; i < key.length; i++)
      params = this.addToParams(params, key[i], value[i]);
    this.props.history.push({
      pathname: "/books",
      search: params,
    });
  };
  goToPage = (x) => {
    let st = queryString.parse(this.props.location.search).searchText;

    let si = parseInt(queryString.parse(this.props.location.search).startIndex);
    let mr = parseInt(queryString.parse(this.props.location.search).maxResults);
    let selLang = queryString.parse(this.props.location.search).langRestrict;
    let selBook = queryString.parse(this.props.location.search).filter;
    if (selLang === undefined) selLang = "";
    if (selBook === undefined) selBook = "";
    let nextSi;
    if (x === 1) nextSi = si + mr;
    else nextSi = si - mr;
    this.addToUrl(
      ["searchText", "startIndex", "maxResults", "langRestrict", "filter"],
      [st, nextSi.toString(), mr.toString(), selLang, selBook]
    );
  };
  getButtons() {
    let start = parseInt(
      queryString.parse(this.props.location.search).startIndex
    );
    let mr = parseInt(queryString.parse(this.props.location.search).maxResults);
    let next = (
      <button
        className="btn btn-dark"
        onClick={() => this.goToPage(1)}
        style={{
          marginTop: "10px",
          display: "inline-block",
          float: "right",
        }}
      >
        <FontAwesomeIcon
          className="fa fa-2x"
          icon={faArrowRight}
          style={{ color: "white" }}
        />
      </button>
    );
    let prev = (
      <button
        className="btn btn-dark"
        onClick={() => this.goToPage(-1)}
        style={{
          marginTop: "10px",
          display: "inline-block",
          float: "left",
        }}
      >
        <FontAwesomeIcon
          className="fa fa-2x"
          icon={faArrowLeft}
          style={{ color: "white" }}
        />
      </button>
    );

    if (start === 0) return next;
    else if (start + mr >= this.state.totalItems) return prev;
    return (
      <div>
        {prev}
        {next}
      </div>
    );
  }
  optChange = (input) => {
    let localRadio = this.state.radio;
    let s = localRadio.map(function (r) {
      if (r.type === input.name) {
        r.selected = input.id;
      }
      return r;
    });
    // after filtering the pages should start from 1
    let st = queryString.parse(this.props.location.search).searchText;
    let nextSi = 0;
    let mr = 8;
    let selLang, selBook;
    if (input.name === "LangRadio") {
      selLang = config.revMap[s[0].selected];
      selBook = config.revMap[this.state.radio[1].selected];
    } else {
      selLang = config.revMap[this.state.radio[0].selected];
      selBook = config.revMap[s[1].selected];
    }

    this.addToUrl(
      ["searchText", "startIndex", "maxResults", "langRestrict", "filter"],
      [st, nextSi.toString(), mr.toString(), selLang, selBook]
    );
  };
  render() {
    let buttons = this.getButtons();
    let si = parseInt(queryString.parse(this.props.location.search).startIndex);
    let mr = parseInt(queryString.parse(this.props.location.search).maxResults);
    return (
      <div>
        <center>
          <h5>
            Showing {si + 1} to {si + mr}
          </h5>
        </center>
        <div className="container col-12 row">
          <div className="container col-3" style={{ float: "left" }}>
            <LeftPanel
              listener={this.optChange}
              language={this.state.radio[0]}
              ebook={this.state.radio[1]}
            />
          </div>

          <div className="container col-8 row">
            {this.state.data === undefined || this.state.data.length === 0 ? (
              <center>
                {" "}
                <FontAwesomeIcon
                  icon={faSpinner}
                  className="fa-spin fa-3x fa-fw"
                />
              </center>
            ) : (
              this.state.data.map((book) => (
                <div
                  className="container col-2"
                  style={{
                    backgroundColor: "powderblue",
                    width: "80%",
                    padding: "10px",
                    fontSize: "10px",
                    marginInline: "15px",
                    marginTop: "10px",
                  }}
                  key={book.id}
                >
                  <center>
                    {book.volumeInfo.imageLinks === undefined ? (
                      "IMAGE NOT AVAILABLE"
                    ) : (
                      <img
                        src={book.volumeInfo.imageLinks.thumbnail}
                        width="70%"
                      />
                    )}

                    <br></br>
                    <b>{book.volumeInfo.title}</b>
                    <br></br>
                    <span style={{ fontSize: "9px" }}>
                      {book.volumeInfo.authors === undefined
                        ? "NA"
                        : book.volumeInfo.authors[0]}
                    </span>
                    <br></br>
                    <span style={{ fontSize: "9px" }}>
                      {book.volumeInfo.categories === undefined
                        ? "NA"
                        : book.volumeInfo.categories[0]}
                    </span>
                    <br></br>
                  </center>
                </div>
              ))
            )}

            <div className="col-8">
              <center>{this.state.data === undefined ? "" : buttons}</center>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Books;
