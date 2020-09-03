import React, { Component } from "react";
import queryString from "query-string";
import axios from "axios";
import Navbar from "./navBar";

import {
  faArrowRight,
  faArrowLeft,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Books extends Component {
  _isMounted = false;
  state = {
    data: [],
    pageInfo: [],
    bestSeller: [],
    language: [],
    isBestSeller: "",
    isLanguage: "",
  };
  makeCbStructure(data) {
    let x = data.filter(function (p) {
      if (p.totalNum > 0) {
        p.selected = false;
        return p;
      }
    });
    return x;
  }
  async componentDidMount() {
    this._isMounted = true;
    let url = this.props.location.pathname;
    let q = this.props.location.search;
    url = "http://localhost:2410" + url + q;

    let response = await axios.get(url);
    console.log(response);
    let lang =
      queryString.parse(q).language === undefined
        ? ""
        : queryString.parse(q).language;
    let bs =
      queryString.parse(q).bestseller === undefined
        ? ""
        : queryString.parse(q).bestseller;

    if (response !== null) {
      let cb = this.makeCbStructure(response.data.refineOptions.language);
      this.setState({
        data: response.data.data,
        pageInfo: response.data.pageInfo,
        bestSeller: response.data.refineOptions.bestseller,
        language: cb,
        isLanguage: lang,
        isBestSeller: bs,
      });
    }
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  addToParams(params, name, value) {
    // console.log(name, value);
    if (value != null && value.length > 0) {
      params = params ? params + "&" : "?";
      params = params + name + "=" + value;
    }
    return params;
  }
  goToPage = (x) => {
    let q = queryString.parse(this.props.location.search);
    let url = this.props.location.pathname;

    let newPage = parseInt(this.state.pageInfo.pageNumber + x);

    let newarrival = q.newarrival;

    if (newarrival === undefined) newarrival = null;
    let bs = q.bestseller;
    if (bs === undefined) bs = null;
    let lang = q.language;
    if (lang === undefined) lang = null;

    let params = "";
    params = this.addToParams(params, "newarrival", newarrival);
    params = this.addToParams(params, "page", newPage.toString());
    params = this.addToParams(params, "language", lang);
    params = this.addToParams(params, "bestseller", bs);

    this.props.history.push({
      pathname: url,
      search: params,
    });
  };
  getButtons() {
    let pageNo = this.state.pageInfo.pageNumber;
    let last = this.state.pageInfo.numberOfPages;
    let next = (
      <button
        className="btn btn-dark"
        style={{ marginInline: "10px", float: "right" }}
        onClick={() => this.goToPage(1)}
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
        style={{ marginInline: "10px", float: "left" }}
      >
        <FontAwesomeIcon
          className="fa fa-2x"
          icon={faArrowLeft}
          style={{ color: "white" }}
        />
      </button>
    );
    if (pageNo === 1) return next;
    if (pageNo === last) return prev;
    return (
      <div>
        {prev}
        {next}
      </div>
    );
  }
  handleChange = (e) => {
    const { currentTarget: input } = e;
    let l = this.state.isLanguage;
    let bs = this.state.isBestSeller;
    let lang = null;
    if (input.type === "checkbox") {
      if (input.name === "Yes" || input.name == "No") {
        if (this.state.isBestSeller.length > 0) bs = "";
        else bs = input.name;
      } else {
        if (this.state.isLanguage.length > 0) l = "";
        else l = input.name;
      }
    }

    let q = queryString.parse(this.props.location.search);
    let url = this.props.location.pathname;

    let newPage = 1;

    let newarrival = q.newarrival;
    if (newarrival === undefined) newarrival = null;

    let params = "";
    params = this.addToParams(params, "newarrival", newarrival);
    params = this.addToParams(params, "page", newPage.toString());
    params = this.addToParams(params, "language", l);
    params = this.addToParams(params, "bestseller", bs);

    this.props.history.push({
      pathname: url,
      search: params,
    });

    this.setState({ isLanguage: l, isBestSeller: bs });
  };
  render() {
    // console.log(this.state.data);
    let pageNo = this.state.pageInfo.pageNumber;
    let items = (pageNo - 1) * 10 + this.state.data.length;

    let total = this.state.pageInfo.totalItemCount;

    let button = this.getButtons();

    return (
      <div>
        <Navbar selectedGenre={this.props.match.params.category} />
        <div className="container col-12 row">
          <div
            className="container col-2"
            style={{ border: "1px solid black" }}
          >
            <center>
              <h5>Options</h5>
              <hr></hr>
              <div className="container">
                <h6>BestSeller</h6>
                {this.state.bestSeller.map((p, ind) =>
                  p.totalNum > 0 ? (
                    <div className="form-check ml-3" key={ind}>
                      <input
                        type="checkbox"
                        name={p.refineValue}
                        id={p.refineValue}
                        value={p.refineValue}
                        checked={p.refineValue === this.state.isBestSeller}
                        onChange={this.handleChange}
                        className="form-check-input"
                      />
                      <label htmlFor={p.refineValue}>
                        <b>
                          {p.refineValue}({p.totalNum})
                        </b>
                      </label>
                    </div>
                  ) : (
                    ""
                  )
                )}
              </div>
              <hr></hr>
              <h6>Language</h6>
              {this.state.language.map((p, ind) =>
                p.totalNum > 0 ? (
                  <div className="form-check " key={ind}>
                    <input
                      type="checkbox"
                      name={p.refineValue}
                      id={p.refineValue}
                      value={p.refineValue}
                      checked={p.refineValue == this.state.isLanguage}
                      onChange={this.handleChange}
                      className="form-check-input"
                    />
                    <label htmlFor={p.refineValue}>
                      <b>
                        {p.refineValue}({p.totalNum})
                      </b>
                    </label>
                  </div>
                ) : (
                  ""
                )
              )}
            </center>
          </div>

          <div className="container col-9">
            <center>
              <h6>
                Showing {1 + (pageNo - 1) * 10} to {items} of {total}
              </h6>
            </center>
            <div
              className="col-9 row text-light bg-dark"
              style={{
                marginTop: "1%",
                marginLeft: "10%",
                textAlign: "center",
                fontSize: "15px",
                fontWeight: "bold",
              }}
            >
              <div className="col-3">Title</div>
              <div className="col-2">Author</div>
              <div className="col-2">Language</div>
              <div className="col-2">Genre</div>
              <div className="col-1">Price</div>
              <div className="col-2">BestSeller</div>
            </div>
            {this.state.data.length === 0 ? (
              <FontAwesomeIcon
                icon={faSpinner}
                className="fa-spin fa-2x fa-fw"
              />
            ) : (
              this.state.data.map((book) => (
                <div
                  className="col-9 row text-dark bg-light border"
                  key={book.bookid}
                  style={{
                    marginLeft: "10%",
                    textAlign: "center",
                    fontSize: "12px",
                  }}
                >
                  <div className="col-3">{book.name}</div>
                  <div className="col-2">{book.author}</div>
                  <div className="col-2">{book.language}</div>
                  <div className="col-2">{book.genre}</div>
                  <div className="col-1">{book.price}</div>
                  <div className="col-2">{book.bestseller}</div>
                </div>
              ))
            )}
            <div className="container col-9" style={{ marginTop: "10px" }}>
              {this.state.pageInfo.numberOfPages === 1 ? "" : button}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Books;
