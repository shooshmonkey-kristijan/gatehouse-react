import React, { Component } from "react";
import "./Items.css";

import { Link } from "react-router-dom";

import Header from "../Header/Header";

class Items extends Component {
  render() {
    return (
      <div>
        <Header
          text="All Changes Saved"
          forwardroute="/Rules"
          backroute="/Dashboard"
          title="Items"
        />
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Units</th>
                <th>Cost/Rate</th>
                <th>Duration</th>
                <th>Travel Days</th>
                <th>Pre-Shoot</th>
                <th>Shoot</th>
                <th>Post-Shoot</th>
                <th>Parent</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="text" className="nameInput" />
                </td>
                <td>
                  <input type="number" />
                </td>
                <td>
                  <input type="number" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="number" />
                </td>
                <td>
                  <input type="number" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="number" />
                </td>
                <td>
                  <div className="dropdown">
                    <button className="dropbtn">
                      Director
                      <i className="material-icons">arrow_drop_down</i>
                    </button>
                    <div className="dropdown-content">
                      <a href="#">Gaffer</a>
                      <a href="#">Camera A</a>
                      <a href="#">Cameera B</a>
                    </div>
                  </div>
                </td>
                <td>
                  <i className="material-icons link">link</i>
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

export default Items;
