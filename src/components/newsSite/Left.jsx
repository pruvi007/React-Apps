import React, { Component } from "react";
import queryString from "query-string";
class Left extends Component {
  state = {
    dd: {
      name: ["newest", "oldest", "relevance"],
      selected:
        queryString.parse(this.props.search)["order-by"] == undefined
          ? ""
          : queryString.parse(this.props.search)["order-by"],
    },
    RadioButton: {
      section: ["business", "technology", "politics", "lifestyle"],
      selected:
        queryString.parse(this.props.search).section == undefined
          ? ""
          : queryString.parse(this.props.search).section,
    },
  };
  handleOrder = (e) => {
    const { currentTarget: inp } = e;
    let loc = this.props.search;
    let q = queryString.parse(loc).q;
    let page = 1;

    let section = queryString.parse(loc).section;
    this.props.addListener(
      ["q", "page", "order-by", "section", "api-key"],
      [q, page.toString(), inp.value, section, "test"]
    );
  };
  handleRadio = (e) => {
    const { currentTarget: inp } = e;
    let loc = this.props.search;
    let q = queryString.parse(loc).q;
    let page = 1;
    let order_by = queryString.parse(loc)["order-by"];

    console.log(inp);
    this.props.addListener(
      ["q", "page", "order-by", "section", "api-key"],
      [q, page.toString(), order_by, inp.value, "test"]
    );
  };
  render() {
    let { dd, RadioButton } = this.state;
    return (
      <div>
        <div className="container">
          <div className="container row border text-light bg-dark">
            <h6>Order By</h6>
          </div>
          <select
            name=""
            id=""
            value={this.state.dd.selected}
            style={{
              marginTop: "15px",
              marginBottom: "10px",
              width: "80%",
              fontWeight: "bold",
            }}
            onChange={this.handleOrder}
          >
            <option value="" selected disabled>
              None
            </option>
            {dd.name.map((p) => (
              <option value={p}>{p}</option>
            ))}
          </select>
        </div>
        <div className="container">
          <div className="container row border text-light bg-dark">
            <h6>Sections</h6>
          </div>
          {RadioButton.section.map((l) => (
            <div className="container row border " key={l}>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    name="SectRadio"
                    value={l}
                    id={l}
                    checked={l === RadioButton.selected}
                    onChange={this.handleRadio}
                    className="form-check-label"
                  />
                  {l}
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Left;
