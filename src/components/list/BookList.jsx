import React, { Component } from "react";
import  { BrowserRoute as Router,Link } from "react-router-dom";
import './BookList.css'
import axios from "axios";
import PropTypes from "prop-types";
import { Space } from "@arco-design/web-react";
const API_URL = "http://138.138.0.111:8085/api/books/";

export default class BookList extends Component {


  constructor(props) {
    super(props);

    this.state = {
      data: this.getBookListItem(),
     
    };
  }
  getBookInfo() {
    return axios.get(API_URL + "booksInfo", {});
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.search.value);
    console.log(this.state);
    alert(e.target.search.value);
  }
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

  render() {
    let userInfo = [];
    let booksInfo = [];
    let booksInfoItem = [];
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
          <td style={{ border: "1px solid  black" ,  width: '10%'}} className="lue-center">
                
            {this.state.data[i]["zlibraryId"]}
          </td>
          <td style={{ border: "1px solid  black",  width: '40%' }} className="lue-left">
            {this.state.data[i]["title"]}
          </td>
          <td style={{ border: "1px solid  black",  width: '20%' }} className="lue-center">
            {this.state.data[i]["language"]}
          </td>
          <td style={{ border: "1px solid  black",  width: '5%' }} className="lue-center">
            {(parseInt(this.state.data[i]["filesize"])/1024).toFixed(2)} mb
          </td>
          
          <td style={{ border: "1px solid  black",  width: '5%' }} className="lue-center">
            {this.state.data[i]["pages"]}
          </td>
          <td style={{ border: "1px solid  black",  width: '5%' }} className="lue-center">
            {this.state.data[i]["dateAdded"]}
            {console.log(this.state.data)}
          </td>
          
          <td style={{ border: "1px solid  black",  width: '10%' }} className="lue-center">
           <Link to="/stats">详细</Link>

          </td>
        </tr>
      );
    }

    booksInfo.push(
      <table
        width="100%"
        height="80%"
        style={{ cellspacing: "0", cellpadding: "0", border: "1px solid black" }}
        className="table1"
      >
        <thead style={{ backgroundColor: "silver" }}>
          <tr>
            <td style={{ border: "1px solid  black" }} className="lue-center" >图书编号</td>
            <td style={{ border: "1px solid  black" }} className="lue-center" >图书书名</td>
            <td style={{ border: "1px solid  black" }} className="lue-center">图书语言</td>
            <td style={{ border: "1px solid  black" }} className="lue-center">图书大小</td>
            <td style={{ border: "1px solid  black" }} className="lue-center">图书页数</td>
            <td style={{ border: "1px solid  black" }} className="lue-center">图书日期</td>
            <td style={{ border: "1px solid  black" }} className="lue-center">图书观看</td>
          </tr>
        </thead>
        {booksInfoItem}
      </table>
    );

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.search} name="search" />
          <input type="submit" value="检索" />
        </form>
        <h2>图书一览</h2>
        {booksInfo}

      </div>
    );
  }
}
