import React, { Component } from "react";
import "./SideBar.css";

import ListItem from "../ListItem/ListItem";

class SideBar extends Component {
  render() {
    return (
      <div className="sideBarContainer">
        <div className="listItemTitle">
          <span>COKE COLA COMERCIAL</span>
        </div>
        <div className="listItemDiv">
          <ListItem />
        </div>
        <div className="bottomLinks">
          <p>No, Shoot Days</p>
          <p>Insurance Rate</p>
          <p>Markup</p>
        </div>
      </div>
    );
  }
}

export default SideBar;
