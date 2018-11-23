import React, { Component } from "react";
import "./ListItem.css";

class ListItem extends Component {
  render() {
    return (
      <div className="listItem">
        <p className="paraTitle">Contact: </p>
        <input type="text" />

        <p className="paraTitle">Office Number: </p>
        <input type="text" />

        <p className="paraTitle">Cell Number: </p>
        <input type="text" />

        <p className="paraTitle">Email: </p>
        <input type="text" />

        <p className="paraTitle">Skype: </p>
        <input type="text" />
        <div className="notes">
          <p id="paraTitle">Notes: </p>
          <input type="text" />
        </div>
      </div>
    );
  }
}

export default ListItem;
