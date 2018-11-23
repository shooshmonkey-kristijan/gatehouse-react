import React, { Component } from "react";
import "./Header.css";

import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <div className="headerContainer">
        <div className="hamburgerMenu">
          <Link to="/Aside">
            <i className="material-icons">menu</i>
          </Link>
        </div>
        <div className="summaryHeader">
          <span>{this.props.title}</span>
        </div>
        <div className="backArrow">
          <Link to={`${this.props.backroute}`}>
            <i className="material-icons">chevron_left</i>
          </Link>
        </div>
        <div className="forwardArrow">
          <Link to={`${this.props.forwardroute}`}>
            <i className="material-icons">chevron_right</i>
          </Link>
        </div>
        <div className="loadText">{this.props.text}</div>
        <div className="iconSearch">
          <i className="material-icons searchIcon">search</i>
        </div>
      </div>
    );
  }
}

export default Header;
