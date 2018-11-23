import React, { Component } from "react";
import "./Rules.css";

import { Link } from "react-router-dom";

import Header from "../Header/Header";
class Rules extends Component {
  render() {
    return (
      <div>
        <Header
          text="All Changes Saved"
          backroute="/Items"
          title="Rules"
          forwardroute="/Aside"
        />
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Duration Units</th>
                <th>Travel Days X</th>
                <th>Pre-Shoot X</th>
                <th>Shoot X</th>
                <th>Post-Shoot X</th>
                <th>Overtime 1 X</th>
                <th>Overtime 2 X</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="text" className="nameInput" />
                </td>
                <td>
                  <div className="dropdown">
                    <button className="dropbtn">
                      Days
                      <i className="material-icons">arrow_drop_down</i>
                    </button>
                    <div className="dropdown-content">
                      <a href="#">Hours</a>
                    </div>
                  </div>
                </td>
                <td>
                  <input type="number" />
                </td>
                <td>
                  <input type="number" />
                </td>
                <td>
                  <input type="number" />
                </td>
                <td>
                  <input type="number" />
                </td>
                <td>
                  <input type="number" />
                </td>
                <td>
                  <input type="number" />
                </td>
              </tr>
            </tbody>
          </table>
          <Link to="/Dashboard">
            <button className="addNewItem">Add New Item</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Rules;
