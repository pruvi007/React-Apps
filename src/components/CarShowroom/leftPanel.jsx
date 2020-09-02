import React, { Component } from "react";
import queryString from "query-string";
class LeftPanel extends Component {
  state = {
    fuel: ["Diesel", "Petrol"],
    type: ["Hatchback", "Sedan"],
    sort: ["kms", "price", "year"],
  };
  addToParams(params, name, value) {
    // console.log(name, value);
    if (value !== undefined && value.length > 0) {
      params = params ? params + "&" : "?";
      params = params + name + "=" + value;
    }
    return params;
  }
  addToUrl = (key, value) => {
    let params = "";
    for (var i = 0; i < key.length; i++)
      params = this.addToParams(params, key[i], value[i]);

    this.props.addToHistory(params);
  };
  handleRadio = (e) => {
    const { currentTarget: inp } = e;
    let q = this.props;
    let min = q.minprice;
    let max = q.maxprice;
    let type = q.type;
    let sort = q.sort;
    let fuel = q.fuel;
    if (inp.name === "fuelRadio") fuel = inp.value;
    if (inp.name === "typeRadio") type = inp.value;
    if (inp.name === "sortRadio") sort = inp.value;
    console.log(min, max, type, sort, fuel);
    this.addToUrl(
      ["minprice", "maxprice", "type", "sort", "fuel"],
      [min, max, type, sort, fuel]
    );
  };
  render() {
    return (
      <div className="container col-2 row" style={{ float: "left" }}>
        <div
          className="card text-white bg-danger m-1 "
          style={{
            height: "10%",
          }}
        >
          <div className="card-header">
            <b>Filter By - FUEL</b>
          </div>
          <div className="card-body">
            {this.state.fuel.map((f) => (
              <div className="radio" key={f}>
                <label>
                  <input
                    type="radio"
                    name="fuelRadio"
                    value={f}
                    id={f}
                    checked={f === this.props.fuel}
                    onChange={this.handleRadio}
                    className="form-check-label"
                  />{" "}
                  {f}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div
          className="card text-white bg-danger  m-1 "
          style={{
            height: "20%",
          }}
        >
          <div className="card-header">
            <b>Filter By - TYPE</b>
          </div>
          <div className="card-body">
            {this.state.type.map((f) => (
              <div className="radio" key={f}>
                <label>
                  <input
                    type="radio"
                    name="typeRadio"
                    value={f}
                    id={f}
                    checked={f === this.props.type}
                    onChange={this.handleRadio}
                    className="form-check-label"
                  />{" "}
                  {f}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div
          className="card text-white bg-danger  m-1 "
          style={{
            height: "20%",
          }}
        >
          <div className="card-header">
            <b>Sort by - SORT </b>
          </div>
          <div className="card-body">
            {this.state.sort.map((f) => (
              <div className="radio" key={f}>
                <label>
                  <input
                    type="radio"
                    name="sortRadio"
                    value={f}
                    id={f}
                    checked={f === this.props.sort}
                    onChange={this.handleRadio}
                    className="form-check-label"
                  />{" "}
                  {f}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default LeftPanel;
