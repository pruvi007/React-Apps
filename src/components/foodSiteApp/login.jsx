import React, { Component } from "react";
import {
  faCar,
  faPlus,
  faLeaf,
  faUser,
  faUnlock,
  faSignInAlt,
  faShoppingCart,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    formData: { email: "", password: "" },
    error: { message: "" },
    user: this.props.user,
  };
  handleChange = (e) => {
    const { currentTarget: inp } = e;
    let localForm = this.state.formData;
    localForm[inp.name] = inp.value;
    this.setState({ formData: localForm });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    let loginData = this.state.formData;
    loginData.returnSecureToken = true;
    try {
      let response = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDziDuSIqzrFMIUrazJOqwVI5APPEawZvI",
        loginData
      );
      console.log(response);
      this.props.onLogin(
        response.data.idToken,
        response.data.localId,
        response.data.email
      );
    } catch (e) {
      // something went wrong
      this.setState({ error: { message: "Email or Password is INVALID" } });
    }
  };
  render() {
    return (
      <div>
        {this.state.user !== "" ? (
          <div className="container" style={{ color: "green" }}>
            <center>
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="fa fa-5x"
                style={{ color: "green" }}
              />
              <br></br>
              <h3>
                <b>LOGIN SUCCESSFUL</b>
                <br></br>
                Go To{" "}
                <Link to="/shoppingCart">
                  {" "}
                  <FontAwesomeIcon icon={faShoppingCart} className="fa fa-2x" />
                </Link>
              </h3>
            </center>
          </div>
        ) : (
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="Name">
                <FontAwesomeIcon icon={faUser} /> Name
              </label>
              <input
                type="text"
                id="email"
                placeholder="Enter Name"
                className="form-control"
                name="email"
                value={this.state.formData.name}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">
                <FontAwesomeIcon icon={faUnlock} /> Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter Password"
                className="form-control"
                name="password"
                value={this.state.formData.password}
                onChange={this.handleChange}
                required
              />
              {this.state.error.message !== "" ? (
                <div
                  className="alert alert-danger"
                  style={{ marginTop: "5px" }}
                >
                  <b>{this.state.error.message}</b>
                </div>
              ) : (
                ""
              )}

              <button className="btn btn-success" style={{ marginTop: "10px" }}>
                <FontAwesomeIcon icon={faSignInAlt} className="fa" />{" "}
                <b>LOGIN</b>
              </button>
            </div>
          </form>
        )}
      </div>
    );
  }
}

export default Login;
