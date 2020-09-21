import React, { Component } from "react";
import axios from "axios";
import {
  faSpinner,
  faRupeeSign,
  faShoppingCart,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Orders extends Component {
  state = {
    orders: [],
    user: this.props.user,
  };
  async componentDidMount() {
    if (this.state.user === "") {
      this.props.history.push({
        pathname: "/login",
        search: "",
      });
    } else {
      let response = await axios.get(
        "https://food-site-f82cf.firebaseio.com/orders/" +
          this.props.localId +
          ".json?auth=" +
          this.props.tokenId
      );
      console.log(response);
      let keys = Object.keys(response.data);
      let localOrders = [];
      for (let i = 0; i < keys.length; i++) {
        let modData = response.data[keys[i]];
        modData.orderId = keys[i];
        localOrders.push(modData);
      }
      this.setState({ orders: localOrders });
    }
  }
  render() {
    return (
      <div>
        <h3>
          <b>Orders</b>
        </h3>
        <div
          className="col-12 row bg-dark text-light"
          style={{ borderBottom: "1px solid black" }}
        >
          <div className="col-3">
            <b>Name</b>
          </div>
          <div className="col-3">
            <b>City</b>
          </div>
          <div className="col-3">
            <b>Amount</b>
          </div>
          <div className="col-2"></div>
        </div>
        {this.state.orders.length === 0 ? (
          <FontAwesomeIcon icon={faSpinner} className="fa fa-2x fa-fw" />
        ) : (
          this.state.orders.map((order) => (
            <div
              className="col-12 row"
              style={{ borderBottom: "1px solid black" }}
            >
              <div className="col-3">{order.name}</div>
              <div className="col-3">{order.city}</div>
              <div className="col-3">
                <FontAwesomeIcon icon={faRupeeSign} />
                {order.amount}
              </div>
              <div className="col-2">
                <FontAwesomeIcon icon={faEye} /> View
              </div>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default Orders;
