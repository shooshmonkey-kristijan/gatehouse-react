import React, { Component } from "react";
import "./Dashboard.css";

import SideBar from "./SideBar/SideBar";
import MainContent from "./MainContent/MainContent";

import Header from "./Header/Header";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header text="Saving...." forwardroute="/Items" backroute="/Aside" />
        <div className="wrapper">
          <div className="sideBarDiv">
            <SideBar />
          </div>
          <div className="mainContentDiv">
            <MainContent />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
