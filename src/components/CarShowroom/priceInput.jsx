import React, { Component } from "react";
class PriceInput extends Component {
  state = { formData: { min: this.props.minprice, max: this.props.maxprice } };
  handleChange = (e) => {
    const { currentTarget: inp } = e;
    let localForm = this.state.formData;
    localForm[inp.name] = inp.value;
    this.setState({ formData: localForm });
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
  handleSubmit = (e) => {
    e.preventDefault();

    let q = this.props;
    let min = this.state.formData.min;
    let max = this.state.formData.max;
    let type = q.type;
    let sort = q.sort;
    let fuel = q.fuel;

    console.log(min, max, type, sort, fuel);
    this.addToUrl(
      ["minprice", "maxprice", "type", "sort", "fuel"],
      [min, max, type, sort, fuel]
    );
  };
  render() {
    return (
      <div>
        <b>Filter by - PRICE</b>
        <form onSubmit={this.handleSubmit} className="form-inline">
          <input
            type="text"
            id="minprice"
            placeholder="Min Price"
            className="form-control m-2"
            name="min"
            value={this.state.formData.min}
            onChange={this.handleChange}
          />

          <input
            type="text"
            id="maxprice"
            placeholder="Max Price"
            className="form-control m-2"
            name="max"
            value={this.state.formData.max}
            onChange={this.handleChange}
          />
          <button className="btn btn-primary" style={{ display: "none" }}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default PriceInput;
