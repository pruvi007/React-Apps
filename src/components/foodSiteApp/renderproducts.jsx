import React, { Component } from "react";
import axios from "axios";
import {
  faSpinner,
  faRupeeSign,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class RenderProducts extends Component {
  state = {
    displayData: [],
    cart: this.props.cart,
  };
  componentDidMount() {
    let arrayData = [];
    for (var i = 0; i < this.state.cart.length; i++) {
      //   console.log(response.data[keys[i]].category, this.props.view);

      if (this.props.view === "All Categories") {
        arrayData.push(this.state.cart[i]);
      } else if (this.state.cart[i].category === this.props.view) {
        arrayData.push(this.state.cart[i]);
      }
    }
    // console.log(arrayData);
    this.setState({ displayData: arrayData });
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
    // this.setState({ displayData: localCart });
  };
  render() {
    return (
      <div>
        {this.state.displayData.length === 0 ? (
          <FontAwesomeIcon icon={faSpinner} className="fa-spin fa-2x fa-fw" />
        ) : (
          <div className="col-12 row">
            {this.state.displayData.map((obj) => (
              <div
                className="col-3"
                style={{
                  margin: "10px",
                  padding: "5px",
                  border: "2px solid black",
                }}
              >
                <center>
                  {obj.cart === 0 ? (
                    <button
                      className="btn btn-dark"
                      onClick={() => this.handleCartChange(obj, "plus")}
                    >
                      Add To Cart <FontAwesomeIcon icon={faShoppingCart} />
                    </button>
                  ) : (
                    <div>
                      <div
                        className="btn btn-danger"
                        style={{ float: "left" }}
                        onClick={() => this.handleCartChange(obj, "sub")}
                      >
                        -
                      </div>
                      <b>{obj.cart}</b>
                      <div
                        className="btn btn-success"
                        style={{ float: "right" }}
                        onClick={() => this.handleCartChange(obj, "plus")}
                      >
                        +
                      </div>
                    </div>
                  )}
                  <img
                    src={obj.imgLink}
                    width="100%"
                    style={{ marginTop: "5px" }}
                  />

                  <b>{obj.name}</b>
                  <br></br>
                  <FontAwesomeIcon icon={faRupeeSign} className="fa" />
                  {obj.price}
                  <br></br>
                </center>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default RenderProducts;
