import React, { Component} from "react";
import Field from "./Field";
import Button from "./Button";
import { Message } from "@arco-design/web-react";
// import { Switch, Route, HashRouter, Redirect, Link } from 'react-router-dom';
import MainLayout from '../../layout/MainLayout';
import List from '../list/List';
export default class App extends Component {
  username = React.createRef();
  password = React.createRef();


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
            event={() => {
              console.log(
                this.username.current,
                this.username.current.state.value,
                this.password.current.state.value
              );

              if (
                this.username.current.state.value === "admin" &&
                this.password.current.state.value === "123"
              ) {
                Message.success("登陆成功");
                // 跳转到首页
                // <Route path="/home" element={<MainLayout />}></Route>
                // <Route path="list" element={<List />} />
                // <Redirect from="/login" to="/list"></Redirect>
              }
              // 处理登录逻辑
              console.log("登录");
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
