import React, { Component } from "react";
import {
  faSpinner,
  faRupeeSign,
  faPlus,
  faTasks,
  faShoppingCart,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
class NewProduct extends Component {
  state = { item: { category: "", imgLink: "", name: "", price: "" } };
  componentDidMount() {
    if (this.props.user === "") {
      this.props.history.push({
        pathname: "/login",
        search: "",
      });
    }
  }
  handleChange = (e) => {
    const { currentTarget: inp } = e;
    let localItem = this.state.item;
    localItem[inp.name] = inp.value;
    this.setState({ item: localItem });
  };
  handleCreate = async () => {
    let response = await axios.post(
      "https://food-site-f82cf.firebaseio.com/products.json?auth=" +
        this.props.tokenId,
      this.state.item
    );
    if (response.status === 200) {
      window.alert(
        "Product :" + this.state.item.name + ", successfully Created"
      );
      this.props.onModify();
    }
  };
  render() {
    return (
      <div>
        <h4>
          <b>
            <FontAwesomeIcon icon={faPlus} /> NEW PRODUCT -{" "}
            {this.state.item.name}
          </b>
        </h4>

        <div className="container col-12 row">
          <div className="col-5">
            <div className="form-group">
              <label htmlFor="Name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter Name"
                className="form-control"
                name="name"
                value={this.state.item.name}
                onChange={this.handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="Price">Price</label>
              <input
                type="text"
                id="price"
                placeholder="Enter Price"
                className="form-control"
                name="price"
                value={this.state.item.price}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group ">
              <label htmlFor="Price">Category</label>
              <select
                name="category"
                id="category"
                value={this.state.item.category}
                onChange={this.handleChange}
                className="form-control"
              >
                <option disabled>Choose a Category</option>
                <option>Vegetables</option>
                <option>Bread</option>
                <option>Dairy</option>
                <option>Fruits</option>
                <option>Seasoning and Spices</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="image">Image URL</label>
              <input
                type="text"
                id="imgLink"
                placeholder="Enter Image URL"
                className="form-control"
                name="imgLink"
                value={this.state.item.imgLink}
                onChange={this.handleChange}
                required
              />
            </div>

            <button
              className="btn btn-success"
              onClick={() => this.handleCreate()}
            >
              <FontAwesomeIcon icon={faPlus} /> Create
            </button>
          </div>
          <div className="col-6" style={{ float: "right" }}>
            <center>
              {" "}
              <img src={this.state.item.imgLink} width="60%" />
              <br></br>
              <h4>
                <b>{this.state.item.name}</b>
                <hr></hr>
              </h4>
              <h6>
                <FontAwesomeIcon icon={faRupeeSign} />{" "}
                <b>{this.state.item.price}</b>
                <br></br>
              </h6>
              <h6>
                <b>{this.state.item.category}</b>
                <br></br>
              </h6>
            </center>
          </div>
        </div>
      </div>
    );
  }
}

export default NewProduct;
