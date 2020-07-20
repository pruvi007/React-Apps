import React, { Component } from "react";
const NavBar = (props) => {
  return (
    <div>
      <nav class="navbar navbar-dark bg-dark">
        <span class="navbar-brand mb-0 h1">{props.name} GAME</span>
        <ul
          class="navbar-nav"
          style={{ position: "absolute", left: "20%", color: "white" }}
        ></ul>
      </nav>
    </div>
  );
};

export default NavBar;
