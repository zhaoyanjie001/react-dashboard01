import React, { Component } from "react";
// import { Outlet } from "react-router-dom";

import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "../card/Card";


import { Outlet, Navigate } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import TopNav from "../topnav/TopNav";

export default class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
  }

  render() {
    return (
      <div>
        <Sidebar />
        <div className="main">
          <div className="main__content">
            <TopNav />
            <Outlet />
          </div>
        </div>
      </div>
    );
  }
}
