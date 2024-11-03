import React, { Component } from "react";
import { Outlet } from "react-router-dom";

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
      <h1>Dashboard</h1>

      {/* This element will render either <DashboardMessages> when the URL is
          "/messages", <DashboardTasks> at "/tasks", or null if it is "/"
      */}
      
      <Outlet />
    </div>
    );
  }
}
