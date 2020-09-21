import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import NavBar from "./navbar";
import Product from "./product";
import axios from "axios";
import Cart from "./cart";
import CheckOut from "./checkout";
import Login from "./login";
import Success from "./success";
import Orders from "./orders";
import ManageOrders from "./manageOrders";
import EditProduct from "./editProduct";
import NewProduct from "./newProduct";
class MainComp extends Component {
  state = {
    login: "",
    cart: [],
    view: 0,
    categories: [
      { name: "All Categories", selected: true },
      { name: "Bread", selected: false },
      { name: "Dairy", selected: false },
      { name: "Fruits", selected: false },
      { name: "Seasoning and Spices", selected: false },
      { name: "Vegetables", selected: false },
    ],
    localId: "",
    tokenId: "",
    formData: { name: "", line1: "", line2: "" },
  };
  async componentDidMount(msg) {
    let response = await axios.get(
      "https://food-site-f82cf.firebaseio.com/products.json"
    );
    let keys = Object.keys(response.data);
    let arrayData = [];
    for (var i = 0; i < keys.length; i++) {
      let modData = response.data[keys[i]];
      modData.cart = 0;
      modData.prodKey = keys[i];
      arrayData.push(modData);
    }
    // console.log(arrayData);
    if (msg === undefined) msg = "";
    this.setState({ cart: arrayData, message: msg });
  }
  handleUpdateCart = (cart) => {
    this.setState({ cart: cart });
  };
  handleUpdateView = (ind) => {
    this.setState({ view: ind });
  };
  handleViewChange = (curInd) => {
    // console.log(curInd);
    let localCategories = this.state.categories.map(function (cat, ind) {
      if (curInd === ind) return { name: cat.name, selected: true };
      return { name: cat.name, selected: false };
    });
    // console.log(localCategories);
    this.setState({ view: curInd, categories: localCategories });
  };
  handleLogin = (tokenID, localID, user) => {
    this.setState({ localId: localID, tokenId: tokenID, login: user });
  };
  handleAddressChange = (addressData) => {
    this.setState({ formData: addressData });
  };
  handleReset = () => {
    let localCart = this.state.cart.map(function (item) {
      item.cart = 0;
      return item;
    });
    console.log(localCart);
    this.setState({
      cart: localCart,
      formData: { name: "", line1: "", line2: "" },
    });
  };
  handleLogout = () => {
    console.log("Logging Out..");
    this.setState({ login: "", localId: "", tokenId: "" });
  };
  handleModify = () => {
    this.componentDidMount();
  };
  render() {
    let total = 0;
    for (let i = 0; i < this.state.cart.length; i++) {
      total += this.state.cart[i].cart;
    }
    console.log(total);
    return (
      <div>
        <div className="container">
          <NavBar
            isLogin={this.state.login}
            total={total}
            onLogout={() => this.handleLogout()}
          />
          <Route
            path="/shoppingCart"
            exact
            render={(props) => (
              <Cart
                {...props}
                key={Math.floor(Math.random() * 10)}
                cart={this.state.cart}
                updateCart={this.handleUpdateCart}
              />
            )}
          />

          <Route
            path="/orders"
            exact
            render={(props) => (
              <Orders
                {...props}
                key={Math.floor(Math.random() * 10)}
                localId={this.state.localId}
                tokenId={this.state.tokenId}
                user={this.state.login}
              />
            )}
          />
          <Route
            path="/newProduct"
            exact
            render={(props) => (
              <NewProduct
                {...props}
                key={Math.floor(Math.random() * 10)}
                localId={this.state.localId}
                tokenId={this.state.tokenId}
                user={this.state.login}
                data={this.state.cart}
                onModify={this.handleModify}
              />
            )}
          />
          <Route
            path="/manageOrders"
            exact
            render={(props) => (
              <ManageOrders
                {...props}
                key={Math.floor(Math.random() * 10)}
                localId={this.state.localId}
                tokenId={this.state.tokenId}
                user={this.state.login}
                data={this.state.cart}
              />
            )}
          />
          <Route
            path="/editProduct"
            exact
            render={(props) => (
              <EditProduct
                {...props}
                key={Math.floor(Math.random() * 10)}
                localId={this.state.localId}
                tokenId={this.state.tokenId}
                user={this.state.login}
                data={this.state.cart}
                onModify={this.handleModify}
              />
            )}
          />

          <Route
            path="/orderSuccess"
            exact
            render={(props) => (
              <Success
                {...props}
                key={Math.floor(Math.random() * 10)}
                cart={this.state.cart}
                localId={this.state.localId}
                tokenId={this.state.tokenId}
                data={this.state.formData}
                reset={this.handleReset}
              />
            )}
          />
          <Route
            path="/login"
            exact
            render={(props) => (
              <Login
                {...props}
                key={Math.floor(Math.random() * 10)}
                onLogin={this.handleLogin}
                user={this.state.login}
              />
            )}
          />

          <Route
            path="/checkOut"
            exact
            render={(props) => (
              <CheckOut
                {...props}
                cart={this.state.cart}
                user={this.state.login}
                data={this.state.formData}
                onAddressChange={this.handleAddressChange}
              />
            )}
          />
          <Route
            path="/"
            exact
            render={(props) => (
              <Product
                {...props}
                key={Math.floor(Math.random() * 10)}
                cart={this.state.cart}
                updateCart={this.handleUpdateCart}
                view={this.state.view}
                updateView={this.handleUpdateView}
                categories={this.state.categories}
                viewChange={this.handleViewChange}
              />
            )}
          />
          <Redirect to="/" />
        </div>
      </div>
    );
  }
}

export default MainComp;
