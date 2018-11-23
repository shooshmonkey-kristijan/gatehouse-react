import React, { Component } from "react";
import "./MainContent.css";

import ListBudget from "../Card/ListBudget";

class MainContent extends Component {
  render() {
    return (
      <div className="mainContainer">
        <ListBudget />
      </div>
    );
  }
}

export default MainContent;
