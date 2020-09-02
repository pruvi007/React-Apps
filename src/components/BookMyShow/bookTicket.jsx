import React, { Component } from "react";
import queryString from "query-string";
import Config from "./Config.json";
import axios from "axios";
import { Link } from "react-router-dom";
import Svg from "./Config2.svg";
import Svg1 from "./Config3.svg";
import Navbar from "./Navbar";
class PageDetails extends Component {
  state = {
    MainData: [],
    active: false,
    showtime: ["Morning", "Afternoon", "Evening", "Night"],
    price: [
      { price: "101-200", selected: false },
      { price: "201-300", selected: false },
      { price: "301-350", selected: false },
    ],
    bgColor: { backgroundColor: "green" },
    dateInd: { ind: 0, value: [] },
  };
  async componentDidMount() {
    this._isMounted = true;
    let { lang, format, genre } = queryString.parse(this.props.location.search);
    // let ind=this.props.match.params
    lang = lang === undefined ? "" : lang;
    format = format !== undefined ? format : "";
    genre = genre !== undefined ? genre : "";
    let path = this.props.location.pathname;
    // console.log(path)
    // console.log(Config.base)
    // console.log(lang)
    // console.log(format)
    let today = new Date();
    let tom = new Date();
    tom.setDate(tom.getDate() + 1);

    let dAfter = new Date();
    dAfter.setDate(dAfter.getDate() + 2);
    let Month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let dates = {
      ind: 0,
      value: [
        today.getDate() + " TODAY",
        tom.getDate() + " " + Month[tom.getMonth()],
        dAfter.getDate() + " " + Month[dAfter.getMonth()],
      ],
    };
    let params = "";
    let url1 = Config.base + "/" + "movies";
    console.log(url1);
    params = this.addToParams(params, "lang", lang);
    params = this.addToParams(params, "format", format);
    params = this.addToParams(params, "genre", genre);
    const url = await axios.get(url1 + path + params);
    // console.log(params)
    //   console.log(url)
    //  console.log(Config.base +path+params)
    // this.props.onShowTiming(url.data)
    if (url != null) {
      this.setState({
        MainData: url.data,
        dateInd: dates,
      });
    }
  }

  addToParams(params, name, value) {
    if (value !== undefined && value.length > 0) {
      params = params ? params + "&" : "?";
      params = params + name + "=" + value;
    }
    return params;
  }
  handleClick = () => {
    const { currentState } = this.state;
    this.setState({ active: !currentState });
  };
  makesbstructure1 = (show) => {
    let temp = show.map((p) => ({
      show: p,
      selected: false,
    }));
    return temp;
  };
  handleBtnClick = (ind) => {
    let localDate = this.state.dateInd;
    localDate.ind = ind;
    this.setState({ dateInd: localDate });
  };
  getDateBtnColor = (ind) => {
    let color = "white";
    if (this.state.dateInd.ind === ind) color = "green";
    return color;
  };
  render() {
    let { movieInd } = this.props;
    console.log("movieInd", movieInd);
    // console.log("movieTitle", movieTitle)
    const { active, MainData, showtime, price } = this.state;
    // console.log(price)
    let newGenre = [];
    let showTimecB = this.makesbstructure1(showtime);
    // console.log(showTimecB);
    let maindata;
    if (MainData.showTiming !== undefined) {
      maindata = MainData.showTiming[0];
    }
    // console.log(maindata)
    if (MainData.genre !== undefined) {
      newGenre = MainData.genre.split(",");
    }
    return (
      <div>
        <Navbar />
        <div className="row bg-secondary text-white pt-4">
          <div className="col">
            <h3>{MainData.title}</h3>
            <div className="col">
              <i className="fa fa-heart" style={{ color: "#d6181f" }}></i>{" "}
              &nbsp;{" "}
              <span style={{ fontSize: "20px" }}>
                <strong>{MainData.rating}</strong>
              </span>
              &nbsp;&nbsp;{" "}
              {newGenre.map((p) => (
                <span
                  style={{
                    borderRadius: "10px",
                    border: "solid white",
                    paddingRight: "30px",
                  }}
                >
                  {p}&nbsp; &nbsp;&nbsp;
                </span>
              ))}
              &nbsp;&nbsp;
              <div className="col"></div>
              <span style={{ fontSize: "10px" }}>{MainData.votes}</span>
            </div>
          </div>
        </div>
        <div className="row bg-light pt-2 pb-2">
          <div className="col-lg-5">
            {this.state.dateInd.value.map((date, ind) => (
              <button
                className="btn btn-sm btn-light m-1"
                style={{ backgroundColor: this.getDateBtnColor(ind) }}
                onClick={() => this.handleBtnClick(ind)}
              >
                <b>{date}</b>
              </button>
            ))}
          </div>

          <div className="col-lg-2 border-right d-none d-lg-block">
            <div className="dropdown">
              <div className="dropdown-content">
                <div
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  //   aria-haspopup="true"
                  style={{ cursor: "pointer" }}
                >
                  Filter Price
                </div>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <div>
                    {price.map((p, ind) => (
                      <div className="form-check" key={ind}>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name={p.price}
                          id={p.price}
                          checked={p.selected}
                          value={p.selected}
                          //  onChange={this.handleChange}
                        />
                        <label className="form-check-label" htmlFor={p.price}>
                          {p.price}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 border-right d-none d-lg-block">
            <div className="dropdown">
              <div className="dropdown-content">
                <div
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  //   aria-haspopup="true"
                  style={{ cursor: "pointer" }}
                >
                  Filter Showtime
                </div>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <div>
                    {showTimecB.map((p, ind) => (
                      <div className="form-check" key={ind}>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name={p.show}
                          id={p.show}
                          checked={p.selected}
                          value={p.selected}
                          //  onChange={this.handleChange}
                        />
                        <label className="form-check-label" htmlFor={p.show}>
                          {p.show}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container col-12">
          <div className="row col-8" style={{ backgroundColor: "#E9967A" }}>
            {/* <div className="col-8"> */}
            <div className="col  col-4 border-right">
              <div className="row">
                <span className="logo nav-item">
                  <img src={Svg} alt="" />
                </span>
              </div>
              <div className="row" style={{ size: "2px", fontSize: "10px" }}>
                <span>M-Ticket Available</span>
              </div>
            </div>
            <div className="col  col-4 border-left">
              <div className="row">
                <span className="logo nav-item">
                  <img src={Svg1} alt="" />
                </span>
              </div>
              <div className="row" style={{ size: "2px", fontSize: "10px" }}>
                <span> Food Available</span>
              </div>
            </div>
          </div>
          <div className="row col-4" style={{ float: "right" }}>
            <img
              src="https://i.ibb.co/JqbbCJz/1331654202504679967.jpg"
              alt=""
            />
          </div>
          {maindata === undefined ? (
            ""
          ) : (
            <div>
              {maindata.map((p, ind1) => (
                <div className="row border-bottom-1 pt-1">
                  <div className="col-lg-1 col-2">
                    <i className="fa fa-heart"></i>
                  </div>

                  <div className="col-lg-3 col-9" style={{ fontSize: "12px" }}>
                    <div className="row">
                      <strong>
                        {/* Cinepolis: DLF Place, Saket */}
                        {/* { MainData.showTiming[0]} */}
                        {p.name}
                      </strong>
                    </div>
                    <div className="row">
                      <span
                        className="logo nav-item"
                        style={{ width: "2px", fontSize: "10px" }}
                      >
                        <img src={Svg} alt="" />
                        M-Tickebookt
                      </span>{" "}
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      <span
                        className="logo nav-item"
                        style={{ width: "2px", fontSize: "10px" }}
                      >
                        <img src={Svg1} alt="" />
                        F&amp;B{" "}
                      </span>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    {p.timings.map((x, ind2) => (
                      <Link
                        to={
                          "/NCR/" +
                          movieInd +
                          "/buyTicket/" +
                          ind1 +
                          "/" +
                          ind2 +
                          "/" +
                          this.state.dateInd.ind +
                          "?time=" +
                          this.state.dateInd.value[this.state.dateInd.ind]
                        }
                      >
                        <button
                          className="btn btn-outline-secondary text-primary btn-sm border-muted m-1"
                          onClick={() =>
                            this.props.onBookingDetails(p.name, x.name, p)
                          }
                          style={{
                            marginButtom: "12px",
                            maxHeight: "40px",
                            fontSize: "12px",
                            tabSize: "0",
                          }}
                        >
                          <span data-toggle="tooltip" title="164">
                            {x.name}
                          </span>
                        </button>
                      </Link>
                    ))}
                    <ul style={{ fontSize: "12px" }}>
                      <li>Cancellation available</li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default PageDetails;
