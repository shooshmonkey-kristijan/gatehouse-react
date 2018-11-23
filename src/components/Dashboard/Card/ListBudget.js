import React, { Component } from "react";
import "./ListBudget.css";

class ListBudget extends Component {
  render() {
    return (
      <div className="listDiv">
        <table className="table table-sm">
          <thead>
            <tr>
              <th scope="col" />
              <th scope="col">
                <span className="listTitle">Rand</span>
              </th>
              <th scope="col">
                <span className="listTitle">Euro</span>
              </th>
              <th scope="col">
                <span className="listTitle">Euro + markup</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="itemDescTitle">
                Base Production
              </th>
              <td> 35.000</td>
              <td>35.000</td>
              <td>35.000</td>
            </tr>
            <tr>
              <th scope="row" className="itemDescTitle">
                Scouting
              </th>
              <td>35.000</td>
              <td>35.000</td>
              <td>35.000</td>
            </tr>
            <tr>
              <th scope="row" className="itemDescTitle">
                Casting
              </th>
              <td>35.000</td>
              <td>35.000</td>
              <td>35.000</td>
            </tr>
            <tr>
              <th scope="row" className="itemDescTitle">
                Casting
              </th>
              <td>35.000</td>
              <td>35.000</td>
              <td>35.000</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListBudget;
