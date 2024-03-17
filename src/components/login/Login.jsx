import React, { Component, useState } from "react";
import Field from "./Field";
import Button from "./Button";
import axios from "axios";
import MainLayout from "../../layout/MainLayout";
import Dashboard from "../../pages/Dashboard";
import { BrowserRouter,Navigate, Routes, Route,redirect, Location   } from "react-router-dom";
const API_URL = "http://138.138.0.111:8080/api/auth/";



export default class login extends Component {
  

  username = React.createRef();
  password = React.createRef();
  getUserInfo(username,password) {
    console.log(username);
    console.log(password);
    return axios.post(API_URL + "login", { username, password });
  }
  vTop(value) {
    console.log(value);
    // this.props.onValue(value);
  }
  test(value) {
    console.log(value);
  }

  constructor(props) {
    super(props);
    
    this.state = {
      value: "",
      content: "",
      name: "",
      password: "",
    };
    // this.state = { value1: '' };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
    //  this.setState({
    //   value1: event.target.value1
    //  });
    console.log(this.state);
    console.log(event.target.value);
  }
  updateGlobalVariable(event) {
    window.someValue1 = event.target.value;
    console.log(window.someValue1);
  }
  render() {
    return (
      <div>

        <h2>登录页面</h2>
        <Field label="用户名" type="text" ref={this.username}></Field>
        <Field label="密码" type="password" ref={this.password}></Field>

        <div style={{ display: "flex", marginLeft: "110px" }}>
          <Button
            type="button"
            value="登录"
            event={ async () => {
              this.getUserInfo(this.username.current.state.value,this.password.current.state.value).then(
                (response) => {
                  this.setState({
                    content:
                      response.data["id"] +
                      ":" +
                      response.data["username"] +
                      ":" +
                      response.data["email"] +
                      ":" +
                      response.data["password"],
                    name: response.data["username"],
                    password: response.data["password"],
                  });
                  console.log("username:"+response.data["username"]);
                  console.log("password:"+response.data["password"]);

                  if (
                    this.username.current.state.value === this.state.name &&
                    this.password.current.state.value === this.state.password
                  ) {
                    console.log("登陆成功");
                    window.localStorage.setItem('loginState',"1");
                    window.localStorage.setItem('loginName',this.state.name);
                    window.location.href = '/';
                  } else {
                    // 处理登录逻辑
                    console.log("登录");
                    window.localStorage.setItem('loginState',"0");
                    <Navigate to="/login" />;
                  }
                  
                },
                (error) => {
                  this.setState({
                    content:
                      (error.response && error.response.data) ||
                      error.message ||
                      error.toString(),
                  });
                  console.log(error);
                }
              );
              
            }}
          />
          <Button
            type="button"
            value="重置"
            event={() => {
              this.username.current.clear();
              this.password.current.clear();
            }}
          />
        </div>
      </div>
    );
  }
}
