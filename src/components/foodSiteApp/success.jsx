import React, { Component } from "react";

import axios from "axios";
class Success extends Component {
  state = {
    error: "",
  };
  async componentDidMount() {
    let items = this.props.cart.filter((item) => item.cart > 0);
    let totalAmount = 0;
    for (let i = 0; i < items.length; i++)
      totalAmount += items[i].price * items[i].cart;
    let postData = {
      address: this.props.data.line1 + " " + this.props.data.line2,
      city: this.props.data.city,
      name: this.props.data.name,
      items: items,
      amount: totalAmount,
    };
    // console.log(postData);
    if (postData.city !== undefined) {
      try {
        let response = await axios.post(
          "https://food-site-f82cf.firebaseio.com/orders/" +
            this.props.localId +
            "/.json?auth=" +
            this.props.tokenId,
          postData
        );
        // console.log(response);
        this.props.reset();
      } catch (e) {
        // something went wrong
        this.setState({
          error: "Something went wrong while Submitting your Order.",
        });
      }
    }
  }
  render() {
    return (
      <div>
        <center>
          {this.state.error.length > 0 ? (
            <div style={{ color: "red" }}>
              <h3>{this.state.error}</h3>
            </div>
          ) : (
            <div>
              <h3>
                <b>Thank You!</b>
                <br></br>We recieved your order and will process it within next
                24 hours!
              </h3>
            </div>
          )}
        </center>
      </div>
    );
  }
}

export default Success;
