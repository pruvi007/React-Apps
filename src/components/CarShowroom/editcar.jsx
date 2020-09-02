import React, { Component } from "react";
import axios from "axios";
class EditCar extends Component {
  state = {
    carMaster: [],
    formData: {
      id: "",
      color: "",
      kms: "",
      model: "",
      price: "",
      year: "",
    },
    colors: [],
  };
  async componentDidMount() {
    let id = this.props.match.params.id;
    let response = await axios.get("http://localhost:2410/cars/" + id);
    let carMaster = await axios.get("http://localhost:2410/carmaster");
    console.log(response.data);
    console.log(carMaster.data);
    let colors = [];
    for (var i = 0; i < carMaster.data.length; i++) {
      if (carMaster.data[i].model === response.data.model) {
        colors = carMaster.data[i].colors;
        break;
      }
    }
    this.setState({
      formData: response.data,
      carMaster: carMaster.data,
      colors: colors,
    });
  }
  handleChange = (e) => {
    const { currentTarget: inp } = e;
    let local = this.state.formData;
    local[inp.name] = inp.value;
    this.setState({ formData: local });
  };
  handleModel = (e) => {
    const { currentTarget: inp } = e;
    let local = this.state.formData;
    local[inp.name] = inp.value;
    let colors = [];
    for (var i = 0; i < this.state.carMaster.length; i++) {
      if (this.state.carMaster[i].model === inp.value) {
        colors = this.state.carMaster[i].colors;
        break;
      }
    }
    this.setState({ formData: local, colors: colors });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    let response = await axios.put(
      "http://localhost:2410/cars/" + this.state.formData.id,
      this.state.formData
    );
    console.log(response);
    if (response.status === 200) {
      // put successful
      window.alert(
        "Car Id-" + this.state.formData.id + ", updated Successfully"
      );
      this.props.history.push({
        pathname: "/cars",
        search: "",
      });
    }
  };
  render() {
    console.log(this.state.formData);
    let form = this.state.formData;
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form">
          <b>Car ID</b>
          <input
            type="text"
            id="id"
            placeholder="ID"
            className="form-control m-2"
            name="id"
            value={this.state.formData.id}
            onChange={this.handleChange}
            disabled
          />
          <b>Price</b>
          <input
            type="text"
            id="price"
            placeholder="Enter Price"
            className="form-control m-2"
            name="price"
            value={this.state.formData.price}
            onChange={this.handleChange}
          />
          <b>Mileage (in kms)</b>
          <input
            type="text"
            id="kms"
            placeholder="Enter Mileage in kms"
            className="form-control m-2"
            name="kms"
            value={this.state.formData.kms}
            onChange={this.handleChange}
          />
          <b>Manufacture Year</b>
          <input
            type="text"
            id="year"
            placeholder="Enter Manufacrure year"
            className="form-control m-2"
            name="year"
            value={this.state.formData.year}
            onChange={this.handleChange}
          />
          <b>Model:</b>
          <select
            value={this.state.formData.model}
            id="model"
            name="model"
            className="form-control m-2"
            style={{ width: "30%" }}
            onChange={this.handleModel}
          >
            <option value="" disabled>
              Select Model
            </option>
            {this.state.carMaster.map((c) => (
              <option value={c.model}>{c.model}</option>
            ))}
          </select>
          <b>Color:</b>
          <select
            value={this.state.formData.color}
            id="color"
            name="color"
            className="form-control m-2"
            style={{ width: "30%" }}
            onChange={this.handleChange}
          >
            <option value="" disabled>
              Select Color
            </option>
            {this.state.colors.map((col) => (
              <option value={col}>{col}</option>
            ))}
          </select>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default EditCar;
