import React, { Component } from "react";
import LeftPanel from "./leftpanel";
import RenderProducts from "./renderproducts";

class Product extends Component {
  state = {
    selectedView: this.props.view,
    categories: this.props.categories,
  };
  handleViewChange = (curInd) => {
    this.props.viewChange(curInd);
  };
  handleUpdateCart = (cart) => {
    this.props.updateCart(cart);
  };
  render() {
    return (
      <div>
        <div className="col-12 row">
          <div className="col-4">
            <LeftPanel
              category={this.state.categories}
              viewChange={this.handleViewChange}
            />
          </div>

          <div className="col-8">
            <RenderProducts
              key={Math.floor(Math.random() * 10)}
              view={this.state.categories[this.state.selectedView].name}
              cart={this.props.cart}
              updateCart={this.handleUpdateCart}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
