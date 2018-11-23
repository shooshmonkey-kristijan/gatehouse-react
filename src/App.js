import React, { Component } from "react";
import "./App.css";

import Aside from "./components/Aside/Aside";
import Dashboard from "./components/Dashboard/Dashboard";
import Items from "./components/Dashboard/Items/Items";
import Rules from "./components/Dashboard/Rules/Rules";

import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/Dashboard" component={Dashboard} />{" "}
          <Route exact path="/" component={Aside} />
          <Route exact path="/Aside" component={Aside} />
          <Route exact path="/Items" component={Items} />
          <Route exact path="/Rules" component={Rules} />
        </Switch>
      </div>
    );
  }
}

export default App;
