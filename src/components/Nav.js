import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <div className="nav__container">
        <h4 className="active">Home</h4>
        <h4>Discover</h4>
        <h4>Videos</h4>
        <h4>Leaderboard</h4>
        <h4>Challenges</h4>
      </div>
    </div>
  );
}

export default Nav;
