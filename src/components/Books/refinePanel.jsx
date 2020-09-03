import React, { Component } from "react";
import axios from "axios";

class Left extends Component {
  state = {
    bestSeller: { choice: ["Yes", "No"], selected: "" },
    language: ["English", "French"],
  };

  render() {
    return (
      <div className="container" style={{ border: "1px solid black" }}>
        <center>
          <h5>Options</h5>
          <hr></hr>
          <div className="container">
            <h6>BestSeller</h6>
            {this.state.bestSeller.choice.map((p, ind) => (
              <div className="form-check ml-3" key={ind}>
                <input
                  type="radio"
                  name="selected"
                  id={p}
                  value={p}
                  checked={p === this.state.bestSeller.selected}
                  onChange={this.handleChange}
                  className="form-check-input"
                />
                <label htmlFor={p}>
                  <b>{p}</b>
                </label>
              </div>
            ))}
          </div>
          <hr></hr>
          <h6>Language</h6>
          {this.state.language.map((p, ind) => (
            <div className="form-check " key={ind}>
              <input
                type="checkbox"
                name={p}
                id={p}
                value={p}
                checked={p}
                onChange={this.handleChange}
                className="form-check-input"
              />
              <label htmlFor={p}>
                <b>{p}</b>
              </label>
            </div>
          ))}
        </center>
      </div>
    );
  }
}

export default Left;
