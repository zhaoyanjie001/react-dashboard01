import React, { Component, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { BrowserRoute as Router, Link } from "react-router-dom";

import Sidebar from "../sidebar/Sidebar";
import TopNav from "../topnav/TopNav";



import "./BookList.css";
import axios from "axios";
import PropTypes from "prop-types";
import { Space } from "@arco-design/web-react";
import Select from "react-select";
const options = [
  { value: "1", label: "图书ID" },
  { value: "2", label: "图书名称" },
  { value: "3", label: "图书语言" },
];
const API_URL = "http://localhost:8087/api/books/";

export default class BookList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.getBookListItem(),
      search: null,
      select: null,
    };
  }

  async getBookInfo() {
     let response = await axios.get(API_URL + "booksInfo", {});
     return response;
  }
  getBookInfoById(id) {
    console.log(id);
    return axios.post(API_URL + "booksInfoById", {id});
  }

  async getBookInfoByName(name) {
    if(name !== null && name !== "" ) {
      let response = await axios.post(API_URL + "booksInfoByName", { name });
       return response;
    }
  }
  // handleChange = (selectedOption) => {
  //   if(selectedOption !== null || selectedOption !== "") {
  //     this.setState.select = selectedOption;
  //     console.log(`Option selected:`, this.setState.select.value);
  //   }
  // };
  handleSubmit = (e) => {
    e.preventDefault();
    let id =e.target.search.value;
    if(id === "" || id === null){
      return this.getBookListItem();
    }
    console.log(id);

    return this.getBookInfoById(id).then(
      (response) => {
        this.setState({
          data: response.data,
        });
        // alert(this.state.data["title"]);
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
  }

   handleSubmit1 = (e) => {
    e.preventDefault();
    let name = e.target.search.value;
    
    if (name === "" || name === null) {
      return this.getBookListItem();
    }
    console.log(name);
    // let select = this.state.select;
    // console.log(select);
    this.getBookInfoByName(name).then(
      (response) => {
        this.setState({
          data: response.data,
        });
       
        // alert(this.state.data["title"]);
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
  };
  getBookListItem() {
    return this.getBookInfo().then(
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
  }
  componentDidMount() {

    console.log(99);
  }
 
  componentDidUpdate() {
    console.log(101);
  }
  render() {
    let userInfo = [];
    let booksInfo = [];
    let booksInfoItem = [];
    console.log(100);
  //   setTimeout(() => {
  //     this.setState({});
  // }, 1000);
    console.log(this.state.data);
    console.log(this.state.data.length);
    for (let i = 0; i < this.state.data.length; i++) {
      userInfo.push(
        <div key={i}>
          {"zlibrary_id:" + this.state.data[i]["zlibraryId"]} title:{" "}
          {this.state.data[i]["title"]} language:
          {this.state.data[i]["language"]}{" "}
        </div>
      );
      booksInfoItem.push(
        <tr>
          <td
            style={{ border: "1px solid  black", width: "10%" }}
            className="lue-center"
          >
            {this.state.data[i]["zlibraryId"]}
          </td>
          <td
            style={{ border: "1px solid  black", width: "50%" }}
            className="lue-left"
          >
            {this.state.data[i]["title"]}
          </td>
          <td
            style={{ border: "1px solid  black", width: "10%" }}
            className="lue-center"
          >
            {this.state.data[i]["language"]}
          </td>
          <td
            style={{ border: "1px solid  black", width: "10%" }}
            className="lue-center"
          >
            {(parseInt(this.state.data[i]["filesize"]) / 1024).toFixed(2)} mb
          </td>

          <td
            style={{ border: "1px solid  black", width: "20%" }}
            className="lue-center"
          >
            <Link to="/stats">&nbsp;详细</Link> &nbsp;
            {/* <a href={require('../stats/sd.pdf')} target="_self">在线观看</a>&nbsp; */}
            <a href={"http://138.138.0.111:8080/pdf/sample.pdf"} target="_self">
              在线观看
            </a>
            &nbsp;
          </td>
        </tr>
      );
    }

    booksInfo.push(
      <table
        width="100%"
        height="80%"
        style={{
          cellspacing: "0",
          cellpadding: "0",
          border: "1px solid black",
        }}
        className="table1"
      >
        <thead style={{ backgroundColor: "silver" }}>
          <tr>
            <td style={{ border: "1px solid  black" }} className="lue-center">
              图书编号
            </td>
            <td style={{ border: "1px solid  black" }} className="lue-center">
              图书书名
            </td>
            <td style={{ border: "1px solid  black" }} className="lue-center">
              图书语言
            </td>
            <td style={{ border: "1px solid  black" }} className="lue-center">
              图书大小
            </td>
            <td style={{ border: "1px solid  black" }} className="lue-center">
              图书观看
            </td>
          </tr>
        </thead>
        {booksInfoItem}
      </table>
    );

    return (
      <div>
        <form onSubmit={this.handleSubmit1}>
          <font className="class-small">图书条件</font><br/>
          <font className="class-small">图书名称:</font><input type="text" value={this.state.search} name="search" id="search"/>
          <input type="submit" value="检索" />
        </form>
        <h2>图书一览</h2>
        {booksInfo}
      

      </div>
    );
  }
}
