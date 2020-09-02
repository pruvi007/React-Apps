import React, { Component } from "react";
import LeftPanel from "./leftPanel";
import axios from "axios";
import queryString from "query-string";
import PriceInput from "./priceInput";

import {
  faEdit,
  faTrashAlt,
  faRupeeSign,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

class Cars extends Component {
  state = {
    cars: [],
    price: {
      min:
        queryString.parse(this.props.location.search).minprice === undefined
          ? ""
          : queryString.parse(this.props.location.search).minprice,
      max:
        queryString.parse(this.props.location.search).maxprice === undefined
          ? ""
          : queryString.parse(this.props.location.search).maxprice,
    },
    type:
      queryString.parse(this.props.location.search).type === undefined
        ? ""
        : queryString.parse(this.props.location.search).type,
    fuel:
      queryString.parse(this.props.location.search).fuel === undefined
        ? ""
        : queryString.parse(this.props.location.search).fuel,
    sort:
      queryString.parse(this.props.location.search).sort === undefined
        ? ""
        : queryString.parse(this.props.location.search).sort,
  };

  addToParams(params, name, value) {
    // console.log(name, value);
    if (value !== undefined) {
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
      pathname: "/home",
      search: params,
    });
  };
  async componentDidMount() {
    let q = queryString.parse(this.props.location.search);
    let min = q.minprice;
    let max = q.maxprice;
    let type = q.type;
    let sort = q.sort;
    let fuel = q.fuel;

    let params = "";
    params = this.addToParams(params, "minprice", min);
    params = this.addToParams(params, "maxprice", max);
    params = this.addToParams(params, "fuel", fuel);
    params = this.addToParams(params, "type", type);
    params = this.addToParams(params, "sort", sort);
    let response = await axios.get("http://localhost:2410/cars" + params);
    console.log(response);
    this.setState({ cars: response.data });
  }
  addToHistory = (h) => {
    this.props.history.push({
      pathname: "/cars",
      search: h,
    });
  };
  handleDelete = async (id) => {
    let response = await axios.delete("http://localhost:2410/cars/" + id);
    this.componentDidMount();
  };
  render() {
    return (
      <div>
        <LeftPanel
          type={this.state.type}
          fuel={this.state.fuel}
          sort={this.state.sort}
          minprice={this.state.price.min}
          maxprice={this.state.price.max}
          addToHistory={this.addToHistory}
        />
        <PriceInput
          type={this.state.type}
          fuel={this.state.fuel}
          sort={this.state.sort}
          minprice={this.state.price.min}
          maxprice={this.state.price.max}
          addToHistory={this.addToHistory}
        />
        <div className="container col-10 row" style={{ float: "right" }}>
          {this.state.cars.length === 0 ? (
            <h1>
              <FontAwesomeIcon
                icon={faSpinner}
                className="fa-spin fa-2x fa-fw"
              />
              <br></br>
              <b>LOADING CARS</b>
            </h1>
          ) : (
            this.state.cars.map((car) => (
              <div
                className="container bg-warning text-dark col-2 m-1 row"
                style={{
                  float: "left",
                  border: "1px solid black",
                  padding: 10,
                }}
              >
                <center>
                  <b>{car.model}</b>
                  <br></br>
                  Price: <FontAwesomeIcon icon={faRupeeSign} />
                  <b>{car.price}</b>
                  <br></br>
                  <b>{car.color}</b>
                  <br></br>Mileage: <b>{car.kms}</b>
                  <br></br>Manufactured in <b>{car.year}</b>
                  <hr></hr>
                  <Link to={"/car/" + car.id}>
                    <FontAwesomeIcon
                      icon={faEdit}
                      style={{ marginInline: 25 }}
                    />
                  </Link>
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    style={{ marginInline: 25, cursor: "pointer" }}
                    onClick={() => this.handleDelete(car.id)}
                  />
                </center>
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}

export default Cars;
