import React, { Component } from "react";
class ImageCell extends Component {
  state = {};
  render() {
    let image = this.props.image;
    let retVal;
    if (image.state === 1) {
      retVal = (
        <button
          className="btn"
          style={{ background: "#444444", height: "65px", width: "65px" }}
          onClick={this.props.onClick}
        ></button>
      );
    } else if (image.isOpen === 0) {
      retVal = (
        <button
          className="btn"
          style={{ background: "#009ffd", height: "65px", width: "65px" }}
          onClick={this.props.onClick}
        ></button>
      );
    } else {
      let imageSrc = image.name.split("/")[1] + "/" + image.name.split("/")[2];
      retVal = <img src={imageSrc} style={{ height: "65px", width: "65px" }} />;
    }
    return <div className="container">{retVal}</div>;
  }
}

export default ImageCell;
