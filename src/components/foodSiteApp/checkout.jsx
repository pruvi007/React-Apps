import React, { Component } from "react";
import {
  faCartPlus,
  faRupeeSign,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class CheckOut extends Component {
  state = {
    formData: this.props.data,
  };
  handleChange = (e) => {
    const { currentTarget: inp } = e;
    let localForm = this.state.formData;
    localForm[inp.name] = inp.value;
    this.props.onAddressChange(localForm);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.user === "") {
      this.props.history.push({
        pathname: "/login",
        search: "",
      });
    } else {
      this.props.history.push({
        pathname: "/orderSuccess",
        search: "",
      });
    }
  };
  render() {
    let cart = this.props.cart.filter((obj) => obj.cart > 0);
    let total = 0;
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].cart;
      sum += cart[i].cart * cart[i].price;
    }

    return (
      <div>
        <div className="container col-12 row">
          <div className="col-6">
            <h4>
              <b>Shipping</b>
            </h4>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="Name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter Name"
                  className="form-control"
                  name="name"
                  value={this.state.formData.name}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="Address">Address</label>
                <input
                  type="text"
                  id="line1"
                  placeholder="Enter Address Line-1"
                  className="form-control"
                  name="line1"
                  value={this.state.formData.line1}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="line2"
                  placeholder="Enter Address Line-2"
                  className="form-control"
                  name="line2"
                  value={this.state.formData.line2}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="City">City</label>
                <input
                  type="text"
                  id="city"
                  placeholder="Enter City"
                  className="form-control"
                  name="city"
                  value={this.state.formData.city}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <button className="btn btn-success">Place Order</button>
            </form>
          </div>
          <div
            className="col-6"
            style={{ border: "1px solid black", padding: "5px" }}
          >
            <h4>
              <b>
                <FontAwesomeIcon icon={faShoppingBag} className="fa fa-2x" />{" "}
                Order Summary
              </b>
            </h4>
            <br></br>
            You have {total} items in your cart.
            <hr></hr>
            {cart.map((obj, ind) => (
              <div className="row col-12" key={ind} style={{ width: "100%" }}>
                <div className="col-8">
                  <b>{obj.cart}</b> X {obj.name}
                </div>
                <div className="col-4">
                  <FontAwesomeIcon icon={faRupeeSign} className="fa" />
                  {(obj.cart * obj.price).toFixed(2)}
                </div>
                <hr></hr>
              </div>
            ))}
            <hr></hr>
            <div className="row col-12" style={{ width: "100%" }}>
              <div className="col-8">
                <b>TOTAL</b>
              </div>
              <div className="col-4">
                <FontAwesomeIcon icon={faRupeeSign} className="fa" />
                {sum.toFixed(2)}{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckOut;
