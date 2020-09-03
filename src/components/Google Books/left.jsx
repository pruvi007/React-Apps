import React, { Component } from "react";
class LeftPanel extends Component {
  state = {};
  handleChange = (e) => {
    const { currentTarget: input } = e;
    // console.log(input);
    this.props.listener(input);
  };
  render() {
    return (
      <div className="container">
        <div className="container row border text-light bg-dark">
          <h6>Language</h6>
        </div>
        {this.props.language.name.map((l) => (
          <div className="container row border " key={l}>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  name="LangRadio"
                  id={l}
                  checked={l === this.props.language.selected}
                  onChange={this.handleChange}
                />
                {l}
              </label>
            </div>
          </div>
        ))}

        <div
          className="container row border text-light bg-dark"
          style={{ marginTop: "20px" }}
        >
          <h6>Filter</h6>
        </div>
        {this.props.ebook.name.map((l) => (
          <div className="container row border " key={l}>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  name="BookRadio"
                  id={l}
                  checked={l === this.props.ebook.selected}
                  onChange={this.handleChange}
                />
                {l}
              </label>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default LeftPanel;
