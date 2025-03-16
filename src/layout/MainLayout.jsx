import React  from "react";
import "./main-layout.scss";
import { Outlet, Navigate } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import TopNav from "../components/topnav/TopNav";

import Index from "../components/index/Index";

// import { Outlet } from "react-router-dom";

class MainLayout extends React.PureComponent {
  loginTo(value) {
    console.log("login:" + value);
    if (value === "1") {
      return (
        <>
          <Sidebar />
          <div className="main">
            <div className="main__content">
            <TopNav />
              {/* <Index /> */}
              <Outlet/>
              
            </div>
          </div>
        </>
      );
    } else {
      return (
          <Navigate to="/login" replace />
      );
    }
  }
  render() {
    return <div>{this.loginTo(window.localStorage.getItem('loginState'))}</div>;
  }
}
export default MainLayout;
