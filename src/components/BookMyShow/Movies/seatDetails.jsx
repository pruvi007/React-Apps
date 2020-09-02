import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import screenImage from "./screen.svg";
import queryString from "query-string";
class TicketDetails extends Component {
  state = {
    seats: { seatId: 1, seats: [] },
    tickets: 0,
    price: 0,
    date: "",
    showTime: this.props.showTime,
    selectedSeats: [],
  };
  async componentDidMount() {
    let response = await axios.get(
      "https://us-central1-bkyow-22da6.cloudfunctions.net/app/seats/"
    );
    // console.log(response);

    let randomSeat = Math.floor(Math.random() * 3);
    console.log(randomSeat);
    if (response) this.setState({ seats: response.data[randomSeat] });
  }
  sortSeats(a, seatType) {
    console.log(a);
    if (seatType === "recliner") {
      let r = a.filter((seat) => seat.price === 420);
      r = r.sort(function (x, y) {
        if (x.rowName > y.rowName) return 1;
        else if (x.rowName < y.rowName) return -1;
        return 0;
      });
      return r;
    } else {
      let r = a.filter((seat) => seat.price === 250);
      r = r.sort(function (x, y) {
        if (x.rowName > y.rowName) return 1;
        else if (x.rowName < y.rowName) return -1;
        return 0;
      });
      return r;
    }
  }
  getButtonColor = (p, row) => {
    let seatName = p.seatNo + "" + row;
    let selected = this.state.selectedSeats.find((s) => s === seatName);
    if (p.available === false) return "gray";
    else if (selected) return "#2dc492";
    else if (p.available === true) return "white";
  };
  getTimeButtonColor = (curTime) => {
    if (curTime === this.state.showTime) return "seagreen";
    return "white";
  };
  getTimeButtonTextColor = (curTime) => {
    if (curTime === this.state.showTime) return "white";
    return "seagreen";
  };
  addSeats = (p, row, price) => {
    let alreadySelected = false;
    let localSelectedSeats = this.state.selectedSeats;
    let localPrice = this.state.price;
    let seatname = p.seatNo + "" + row;
    for (let i = 0; i < localSelectedSeats.length; i++) {
      if (seatname === localSelectedSeats[i]) {
        alreadySelected = true;
        localPrice -= price;
        localSelectedSeats.splice(i, 1);
        break;
      }
    }
    if (alreadySelected === false) {
      localSelectedSeats.push(seatname);
      localPrice += price;
    }
    this.setState({ selectedSeats: localSelectedSeats, price: localPrice });
  };
  changeTime = (time) => {
    this.setState({ showTime: time });
  };

  bookTickets = async () => {
    let url = "https://us-central1-bkyow-22da6.cloudfunctions.net/app/seat";
    let data = {};
    data.title = this.props.movieName;
    data.movieHall = this.props.movieTitle;
    data.tickets = this.state.selectedSeats;
    data.amount = this.state.price;
    data.time = this.state.showTime;
    data.date = queryString.parse(this.props.location.search).time;
    console.log(data);
    let response = await axios.post(url, data);
    console.log(response);
    if (response.status === 200) {
      // send the user to Payment Gateway
      this.props.history.push({
        pathname: "/booking/payment",
        search: "",
      });
    } else {
      window.alert(
        "Something Went Wrong While booking tickets. Please try Again!"
      );
    }
    this.props.movieDetails(data)
  };
  render() {
    let movieTitle = this.props.movieTitle;
    let showTiming = this.props.showTiming;
    let movieName = this.props.movieName;
    let showTime = this.state.showTime;
    let movieInd = this.props.movieInd;
    let recliner = this.sortSeats(this.state.seats.seats, "recliner");
    let G = this.sortSeats(this.state.seats.seats, "gold");
    let gold = [];
    for (let i = 0; i < G.length; i++) {
      let pres = false;
      for (let j = 0; j < recliner.length; j++) {
        if (G[i].rowName === recliner[j].rowName) {
          pres = true;
          break;
        }
      }
      if (pres === false) gold.push(G[i]);
    }
    gold = this.sortSeats(gold, "gold");
    // console.log(seats);
    return (
      <div>
        <div className="row bg-dark pt-1 pb-3">
          <div
            className="col-lg-6  col-md-12 col-sm-12  text-left text-white"
            style={{ fontSize: "25px" }}
          >
            <div className="row ">
              <div className="col-lg-1 col-md-1 col-2  pt-2">
                <a>
                  <Link to={"/NCR/" + movieInd}>
                    <i
                      className="fa fa-chevron-left"
                      style={{ color: "white" }}
                    ></i>
                  </Link>
                </a>
              </div>
              <div className="col-lg-11 col-md-4 col-7">
                <div className="row">
                  <span>{movieName}</span>
                </div>
                <div className="row" style={{ fontSize: "15px" }}>
                  {" "}
                  {movieTitle}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 text-right text-white d-none d-lg-block">
            <div className="row pt-3 ">
              <div className="col" style={{ fontSize: "15px" }}>
                {" "}
                {this.state.selectedSeats.length} Tickets
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a>
                  <i className="fa fa-times"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row  pt-3 pb-3"
          style={{ backgroundColor: "#f5f5fa", fontSize: "12px" }}
        >
          <div className="col">
            <div className="row">
              <div className="col-lg-6 col-12 ml-1 text-center text-lg-left text-md-left">
                22 TODAY, {showTime}
              </div>
            </div>
            <div className="row ">
              <div className="col">
                {showTiming.map((p) => (
                  <button
                    className="btn btn-md btn btn-outline-success m-1"
                    style={{
                      fontSize: "12px",
                      backgroundColor: this.getTimeButtonColor(p.name),
                      color: this.getTimeButtonTextColor(p.name),
                    }}
                    id="timingcss-true"
                    onClick={() => this.changeTime(p.name)}
                  >
                    {p.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col text-secondary text-left border-bottom ml-5">
          {" "}
          RECLINER - Rs 420.00{" "}
        </div>
        <div>
          <div>
            {recliner.map((seat) => (
              <div className="row ml-4 mr-4 no-gutters">
                <div className="col-1 text-right mr-1">{seat.rowName}</div>
                <div className="col-10 text-left">
                  <div
                    style={{
                      marginLeft: "1",
                      marginRight: "1",
                      marginTop: "1",
                      marginBottom: "1",
                      float: "left",
                      width: "19",
                      height: "19",
                    }}
                  >
                    {" "}
                    {seat.seatList.map((p) => (
                      <button
                        disabled={!p.available}
                        onClick={() =>
                          this.addSeats(p, seat.rowName, seat.price)
                        }
                        style={{
                          display: "inline-block",
                          fontSize: "10px",
                          textAlign: "center",
                          width: "21px",
                          height: "21px",
                          borderRadius: "5px",
                          marginTop: "4px",
                          marginRight: "2px",
                          marginBottom: "4px",
                          marginLeft: "2px",
                          border: "1px solid gray",
                          backgroundColor: this.getButtonColor(p, seat.rowName),
                        }}
                        className="btn btn-sm  btn-outline-secondary-false mr-1 p-1 text-center"
                      >
                        <span className="text-center">{p.seatNo}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col text-secondary text-left border-bottom ml-5">
          {" "}
          GOLD - Rs 250.00{" "}
        </div>
        <div>
          <div>
            {gold.map((seat) => (
              <div className="row ml-4 mr-4 no-gutters">
                <div className="col-1 text-right mr-1">{seat.rowName}</div>
                <div className="col-10 text-left">
                  <div
                    style={{
                      marginLeft: "1",
                      marginRight: "1",
                      marginTop: "1",
                      marginBottom: "1",
                      float: "left",
                      width: "19",
                      height: "19",
                    }}
                  >
                    {" "}
                    {seat.seatList.map((p) =>
                      p.seatNo === 8 || p.seatNo === 19 ? (
                        <button
                          disabled={!p.available}
                          onClick={() =>
                            this.addSeats(p, seat.rowName, seat.price)
                          }
                          style={{
                            display: "inline-block",
                            fontSize: "10px",
                            textAlign: "center",
                            width: "21px",
                            height: "21px",
                            borderRadius: "5px",
                            marginTop: "4px",
                            marginRight: "2px",
                            marginBottom: "4px",
                            marginLeft: "50px",
                            border: "1px solid gray",
                            backgroundColor: this.getButtonColor(
                              p,
                              seat.rowName
                            ),
                          }}
                          className="btn btn-sm  btn-outline-secondary-false mr-1 p-1 text-center"
                        >
                          <span className="text-center">{p.seatNo}</span>
                        </button>
                      ) : (
                        <button
                          disabled={!p.available}
                          onClick={() =>
                            this.addSeats(p, seat.rowName, seat.price)
                          }
                          style={{
                            display: "inline-block",
                            fontSize: "10px",
                            textAlign: "center",
                            width: "21px",
                            height: "21px",
                            borderRadius: "5px",
                            marginTop: "4px",
                            marginRight: "2px",
                            marginBottom: "4px",
                            marginLeft: "2px",
                            border: "1px solid gray",
                            backgroundColor: this.getButtonColor(
                              p,
                              seat.rowName
                            ),
                          }}
                          className="btn btn-sm  btn-outline-secondary-false mr-1 p-1 text-center"
                        >
                          <span className="text-center">{p.seatNo}</span>
                        </button>
                      )
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <br></br>
        <center>
          <img src={screenImage} />
          <h6>All Eyes This Way, Please!</h6>

          {this.state.price > 0 ? (
            <div  className="row fixed-bottom">
              <div  className="col-4"></div>
           {/* <Link to="/pay"></Link>    */}
           <div
                
                className="col-lg-4 col-6 ml-3 mr-2 text-center"
              >
                <button    
                  className="btn btn-primary btn-block btn-md"
                  onClick={() => this.bookTickets()}
                >
               {" "}
              Pay Rs. {this.state.price} {" "}
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
        </center>
      </div>
    );
  }
}

export default TicketDetails;
