import React, { Component } from "react";
import {
  faSpinner,
  faRupeeSign,
  faPlus,
  faTasks,
  faShoppingCart,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";
class ManageOrders extends Component {
  state = {
    search: "",
    data: this.props.data,
  };
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
    let localSearch = inp.value;
    let d = this.props.data;
    let filterData = [];
    for (let i = 0; i < d.length; i++) {
      let p = d[i].name;
      let flag = true;
      for (let j = 0; j < localSearch.length; j++) {
        if (localSearch[j].toLowerCase() !== p[j].toLowerCase()) {
          flag = false;
          break;
        }
      }
      if (flag === true) filterData.push(d[i]);
    }
    if (localSearch === "") filterData = this.props.data;
    this.setState({ search: localSearch, data: filterData });
  };
  render() {
    return (
      <div>
        <h4>
          <b>
            <FontAwesomeIcon icon={faTasks} className="fa" /> Manage Products
          </b>
          <hr></hr>
          <Link to="/newProduct">
            <button class="btn btn-success">
              <b>
                <FontAwesomeIcon icon={faPlus} /> New Product
              </b>
            </button>
          </Link>
          <br></br>

          <div className="form-group">
            <input
              type="text"
              id="search"
              placeholder=" Search Item"
              className="form-control"
              name="search"
              value={this.state.search}
              onChange={this.handleChange}
              style={{ marginTop: "5px", border: "2px solid green" }}
            />
          </div>
          <div
            className="row col-12 text-light bg-dark"
            style={{ fontSize: "18px" }}
          >
            <div className="col-5">Name</div>
            <div className="col-5">Price</div>
            <div className="col-2"></div>
          </div>
          {this.props.data.length === 0 ? (
            <FontAwesomeIcon icon={faSpinner} className="fa fa-2x fa-fw" />
          ) : (
            this.state.data.map((item) => (
              <div
                className="row col-12"
                style={{
                  fontSize: "15px",
                  borderBottom: "1px solid black",
                  padding: "2px",
                }}
              >
                <div className="col-5">{item.name}</div>
                <div className="col-5">
                  <FontAwesomeIcon icon={faRupeeSign} /> {item.price}
                </div>
                <div className="col-2">
                  <Link to={"/editProduct?code=" + item.prodKey}>
                    <FontAwesomeIcon icon={faEdit} /> Edit
                  </Link>
                </div>
              </div>
            ))
          )}
        </h4>
      </div>
    );
  }
}

export default ManageOrders;
