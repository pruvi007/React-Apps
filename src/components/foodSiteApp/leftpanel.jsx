import React, { Component } from "react";
class LeftPanel extends Component {
  state = {};
  handleBackgroundColor(cat) {
    // console.log(cat);
    if (cat.selected === true) return "green";
    return "white";
  }
  handleFontColor(cat) {
    // console.log(cat);
    if (cat.selected === true) return "white";
    return "black";
  }
  render() {
    return (
      <div className="container">
        {this.props.category.map((cat, ind) => (
          <div
            className="col-6 row"
            style={{
              backgroundColor: this.handleBackgroundColor(cat),
              color: this.handleFontColor(cat),
              border: "1px solid black",
              cursor: "pointer",
              borderRadius: "5px",
              marginTop: "2px",
            }}
            onClick={() => this.props.viewChange(ind)}
          >
            {cat.name}
          </div>
        ))}
      </div>
    );
  }
}

export default LeftPanel;
