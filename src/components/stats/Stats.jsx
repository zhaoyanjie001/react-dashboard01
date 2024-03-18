import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
const API_URL = "http://138.138.0.111:8080/api/test/";

class ListItem extends Component {
  static contextTypes = {
    color: PropTypes.string,
    test: PropTypes.string,
  };
  render() {
    const { value } = this.props;
    return (
      <div>
        <li style={{ background: this.context.color }}>
          <span>{value}</span>
        </li>
        <li style={{ background: this.context.test }}>
          <span>{value}</span>
        </li>
      </div>
    );
  }
}

export default class Stats extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.updateGlobalVariable(),
    };
  }
  getUserInfo() {
    return axios.get(API_URL + "userInfo", {});
  }

  updateGlobalVariable() {
    return this.getUserInfo().then(
      (response) => {
        this.setState({
          data: response.data,
        });
      },
      (error) => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString(),
        });
      }
    );

    // return this.getUserInfo().then(
    //   (response) => {
    //     this.setState({
    //       content:
    //         response.data["id"] +
    //         ":" +
    //         response.data["username"] +
    //         ":" +
    //         response.data["email"] +
    //         ":" +
    //         response.data["password"],
    //       name: response.data["username"],
    //       password: response.data["password"],
    //     });
    //   },
    //   (error) => {
    //     this.setState({
    //       content:
    //         (error.response && error.response.data) ||
    //         error.message ||
    //         error.toString(),
    //     });
    //   }
    // );
  }

  render() {
    let userInfo = [];
    for (let i = 0; i < this.state.data.length; i++) {
      userInfo.push(<div key={i}>{ "id:" + this.state.data[i]["id"]}       username: {this.state.data[i]["username"]}       email:{this.state.data[i]["email"] } </div>);
      // userInfo.push(this.state.data[i]["id"]);
      // console.log(<div key={i}>{this.state.data[i]}</div>)
    }

    // let list = this.state.data;
    // list.map((entry, index) => (
    //   // <ListItem key={`list-${index}`} value={entry.username} />
    //   console.log(entry)
    // ))

    // let {content,name,password} = this.stats;

    //  let response = [
    //   { text: "123", checked: false },
    //   { text: "321", checked: true },
    // ];
    // let response1 = this.updateGlobalVariable();
    return (
      <div>
        <h2>用户一览</h2>

        {userInfo}
      </div>
    );
  }
}
