import React, { Component } from "react";
import "./Aside.css";

import { Link } from "react-router-dom";

class Aside extends Component {
  render() {
    return (
      <div className="wrapper">
        <nav className="sidebar">
          <div className="userContent">
            <i className="material-icons avatar">account_circle</i>
            <p className="userEmail">
              user@company.com{" "}
              <i className="material-icons md-48">arrow_drop_down</i>{" "}
            </p>

            <div className="userListCommands">
              <ul>
                <li>
                  <i className="material-icons md-48">add</i>
                  <Link
                    to="./Dashboard"
                    style={{
                      textDecoration: "none",
                      color: "rgb(63, 63, 63)",
                      paddingLeft: "20px"
                    }}
                  >
                    <span>New Project</span>
                  </Link>
                </li>
                <li>
                  <i className="material-icons md-48">folder_open</i>
                  <span>Open Project</span>
                </li>
                <li>
                  <i className="material-icons md-48">create</i>
                  <span className="editProjectSpan">Edit Base Project</span>
                </li>

                <li>
                  {" "}
                  <i className="material-icons md-inactive settingsIcon">
                    settings
                  </i>{" "}
                  <span className="settings">Seettings</span>{" "}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Aside;
