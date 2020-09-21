import React, { Component } from "react";
import {
  faCartPlus,
  faRupeeSign,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
class Cart extends Component {
  state = {
    cart: this.props.cart,
  };
  totalPrice() {
    let sum = 0;
    let C = this.state.cart;
    for (let i = 0; i < C.length; i++) sum += C[i].cart * C[i].price;
    console.log(sum);
    return sum;
  }
  handleCartChange = (item, operation) => {
    let localCart = this.state.cart.map(function (obj) {
      if (obj.name === item.name) {
        if (operation === "plus") obj.cart += 1;
        else {
          if (obj.cart > 0) obj.cart -= 1;
        }
      }
      return obj;
    });
    this.props.updateCart(localCart);
  };
  render() {
    let display = [];
    for (let i = 0; i < this.state.cart.length; i++) {
      if (this.state.cart[i].cart > 0) display.push(this.state.cart[i]);
    }
    return (
      <div>
        <div className="col-12 row bg-dark text-light">
          <div className="col-3">
            <center>Product</center>
          </div>
          <div className="col-2"></div>
          <div className="col-3">
            <center>Quantity</center>
          </div>

          <div className="col-2"></div>
          <div className="col-2">
            <center>Price</center>
          </div>
        </div>
        {display.length === 0 ? (
          <div className="container" style={{ margin: "20px" }}>
            <center>
              <FontAwesomeIcon icon={faCartPlus} className="fa fa-5x" />
              <br></br>
              <b>{"There are No Items in the CART"}</b>
            </center>
          </div>
        ) : (
          display.map((item) => (
            <div className="col-12 row" style={{ margin: "5px" }}>
              <div className="col-3">
                <img
                  src={item.imgLink}
                  width="50%"
                  style={{ borderRadius: "10px" }}
                />
                <br></br>
                <b>{item.name}</b>
              </div>
              <div className="col-2">
                <button
                  className="btn btn-danger"
                  style={{ float: "left" }}
                  onClick={() => this.handleCartChange(item, "sub")}
                >
                  -
                </button>
              </div>
              <div className="col-3">
                <center>
                  <b>{item.cart}</b> in Cart
                </center>
              </div>
              <div className="col-2">
                <button
                  className="btn btn-success"
                  style={{ float: "left" }}
                  onClick={() => this.handleCartChange(item, "plus")}
                >
                  +
                </button>
              </div>
              <div className="col-2">
                <center>
                  <b>
                    <FontAwesomeIcon icon={faRupeeSign} className="fa" />
                    {(item.cart * item.price).toFixed(2)}
                  </b>
                </center>
              </div>
            </div>
          ))
        )}
        {display.length === 0 ? (
          ""
        ) : (
          <div className="col-12 row" style={{ margin: "5px" }}>
            <div className="col-3"></div>
            <div className="col-2"></div>
            <div className="col-3"></div>

            <div className="col-2">
              <b>TOTAL</b>
            </div>
            <div className="col-2">
              <center>
                <center>
                  <b>
                    <FontAwesomeIcon icon={faRupeeSign} className="fa" />{" "}
                    {this.totalPrice().toFixed(2)}
                  </b>
                </center>
              </center>
            </div>
            <Link to="/checkOut">
              <button className="btn btn-success">
                <FontAwesomeIcon icon={faShoppingBag} className="fa" /> Check
                Out
              </button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default Cart;
