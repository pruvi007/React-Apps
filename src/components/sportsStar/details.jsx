import React, { Component } from "react";
import axios from "axios";
import config from "./config.json";
import { Link } from "react-router-dom";
class Details extends Component {
  state = { data: [] };

  async componentDidMount() {
    let response;
    let sport = this.props.match.params.sport;
    if (sport) response = await axios.get(config.all + "/" + sport);
    else response = await axios.get(config.all);
    // console.log(response);
    if (response != null) this.setState({ data: response.data });
  }

  getSportView() {
    let data = this.state.data;
    return (
      <div>
        <div
          className="col-6 row text-light bg-dark"
          style={{ marginTop: "10px" }}
        >
          <div className="col-4">Name</div>
          <div className="col-2">Sport</div>
          <div className="col-2">Country</div>
        </div>
        {data.map((player) => (
          <div className="col-6 row text-dark bg-light" key={player.id}>
            <div className="col-4">
              <Link to={"/sporticons/details/" + player.id}>{player.name}</Link>
            </div>
            <div className="col-2">{player.sport}</div>
            <div className="col-2">{player.country}</div>
          </div>
        ))}
      </div>
    );
  }
  render() {
    let retval;

    retval = this.getSportView();
    return (
      <div>
        <center>{retval}</center>
      </div>
    );
  }
}

export default Details;
