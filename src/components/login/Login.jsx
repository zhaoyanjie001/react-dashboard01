import React, { Component, PropTypes }  from "react";
import Field from "./Field";
import Button from "./Button";
import { Message } from "@arco-design/web-react";
// import { Switch, Route, HashRouter, Redirect, Link } from 'react-router-dom';
import MainLayout from '../../layout/MainLayout';
import List from '../list/List';
export default class App extends Component {
  username = React.createRef();
  password = React.createRef();
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      count : 0,
    };

  }
  
  handleClick(e){
    e.preventDefault();
    this.setState({ 
      count: this.state.count + 1, 
    }); 
  }
  render() {
    return (
      <div>
        <h2>ログイン</h2>
        <Field label="ユーザー" type="text" ref={this.username}></Field>
        <Field label="パスワード" type="password" ref={this.password}></Field>
        <div style={{ display: "flex", marginLeft: "110px" }}>
          <Button
            type="button"
            value="登録"
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
                Message.success("登録成功");
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
            value="クリア"
            event={() => {
              this.username.current.clear();
              this.password.current.clear();
            }}
          />
        </div>
        <div className="ui-tabs">
          <p>{this.state.count}</p> 
          <a href="#" onClick={this.handleClick}>更新</a> 
        </div>
      </div>
    );
  }
}
