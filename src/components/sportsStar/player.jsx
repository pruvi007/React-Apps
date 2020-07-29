import React, { Component } from "react";
import axios from "axios";
import config from "./config.json";
import { Link } from "react-router-dom";

class Player extends Component {
  state = { playerData: [], details: "" };

  async componentDidMount() {
    let response;
    let id = this.props.match.params.id;

    response = await axios.get(config.details + "/" + id);
    // console.log(response);
    if (response != null)
      this.setState({
        playerData: response.data,
        details: response.data.details,
      });
  }
  render() {
    let player = this.state.playerData;
    let det = this.state.details;
    console.log(player);

    return (
      <div className="container" style={{ marginLeft: "10px" }}>
        <h2>
          <b>{player.name}</b>
        </h2>
        <h6>Date of Birth: {det.DOb}</h6>
        <h6>Country: {player.country}</h6>
        <h6>{player.sport}</h6>

        <p>{det.Info}</p>

        <br></br>
        <Link to={"/sporticons/stars/" + player.sport}>
          {player.sport} STARS
        </Link>
      </div>
    );
  }
}

export default Player;
