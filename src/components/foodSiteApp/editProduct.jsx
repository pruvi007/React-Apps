import React, { Component } from "react";
import queryString from "query-string";
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

class EditProduct extends Component {
  state = {
    item: { category: "", imgLink: "", name: "", price: "" },
  };
  componentDidMount() {
    if (this.props.user === "") {
      this.props.history.push({
        pathname: "/login",
        search: "",
      });
    }
    let code = queryString.parse(this.props.location.search).code;
    console.log(code);
    let item = this.props.data.find((item) => item.prodKey === code);
    console.log(item);
    if (item !== undefined) this.setState({ item: item });
  }
  handleChange = (e) => {
    const { currentTarget: inp } = e;
    let localItem = this.state.item;
    localItem[inp.name] = inp.value;
    this.setState({ item: localItem });
  };
  handleEdit = async () => {
    let code = queryString.parse(this.props.location.search).code;
    let response = await axios.put(
      "https://food-site-f82cf.firebaseio.com/products/" +
        code +
        ".json?auth=" +
        this.props.tokenId,
      this.state.item
    );
    console.log(response);
    if (response.status === 200) {
      window.alert(
        "Product :" + this.state.item.name + ", successfully EDITED"
      );
      this.props.onModify();
    }
  };
  handleDelete = async () => {
    let code = queryString.parse(this.props.location.search).code;
    let response = await axios.delete(
      "https://food-site-f82cf.firebaseio.com/products/" +
        code +
        ".json?auth=" +
        this.props.tokenId,
      this.state.item
    );
    console.log(response);
    if (response.status === 200) {
      window.alert(
        "Product :" + this.state.item.name + ", successfully Deleted"
      );
      this.props.onModify();
    }
  };
  render() {
    return (
      <div>
        <h4>
          <b>
            <FontAwesomeIcon icon={faEdit} /> EDIT ORDER -{" "}
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
                placeholder="Enter Address Line-1"
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
                placeholder="Enter City"
                className="form-control"
                name="imgLink"
                value={this.state.item.imgLink}
                onChange={this.handleChange}
                required
              />
            </div>

            <button
              className="btn btn-primary"
              onClick={() => this.handleEdit()}
            >
              <FontAwesomeIcon icon={faEdit} /> Edit
            </button>
            <button
              className="btn btn-danger"
              style={{ marginInline: "10px" }}
              onClick={() => this.handleDelete()}
            >
              <FontAwesomeIcon icon={faTrash} /> Delete
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

export default EditProduct;
