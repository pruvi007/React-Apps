  import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
// import Navbar from "./Navbar";
import MainPage from "./Main_pge";
import BookTicket from "./bookTicket";
import SeatDetail from "./seatDetails";
import PaymentSummary from "./payment";
import Random from './random';

class Main extends Component {
  state = {
    movieInd: 0,
    movieTitle: "",
    showTiming: [],
    showTime: "",
    movieName: "",
    movieDetails:{}
  };
  handleCardClick = (ind, show) => {
    this.setState({ movieInd: ind, movieName: show });
    // console.log("title" ,show)
  };
  handleMovieDetails=(show)=>{
    this.setState({movieDetails:show})
  }
  handleBooking = (x, y, data) => {
    console.log(x);
    console.log(y);
    console.log(data.timings);
    this.setState({ movieTitle: x, showTiming: data.timings, showTime: y });
  };
  handleTiming = (show) => {
    this.setState({ showTiming: show });
  };
  render() {
    return (
      <div>
         <Route
          path="/booking/payment"
          exact
          render={(props) => (
            <PaymentSummary {...props} key={Math.floor(Math.random() * 10)} 
            movieTitle={this.state.movieTitle}
            movieName={this.state.movieName}
            movieInd={this.state.movieInd}
            movieDetails={this.state.movieDetails}
            />
          )}
        />
        <Route
          path="/:name"
          exact
          render={(props) => (
            <MainPage
              {...props}
              key={Math.floor(Math.random() * 10)}
              onCardClick={this.handleCardClick}
            />
          )}
        />
        <Route
          path="/:name/:id"
          exact
          render={(props) => (
            <BookTicket
              {...props}
              key={Math.floor(Math.random() * 10)}
              movieInd={this.state.movieInd}
              onBookingDetails={this.handleBooking}
              onShowTiming={this.handleTiming}
            />
          )}
        />
        <Route
          path="/:name/:id/buyTicket/:ind1/:ind2/:ind3"
          exact
          render={(props) => (
            <SeatDetail
              {...props}
              key={Math.floor(Math.random() * 10)}
              movieTitle={this.state.movieTitle}
              showTiming={this.state.showTiming}
              movieName={this.state.movieName}
              showTime={this.state.showTime}
              movieInd={this.state.movieInd}
              movieDetails={this.handleMovieDetails}
            />
          )}
        />

       
        <Redirect to="/NCR" />
      </div>
    );
  }
}

export default Main;
