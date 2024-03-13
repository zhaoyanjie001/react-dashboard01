import React, { Component } from "react";

import Tab from "../tab/Tab";
import Tabs from "../tab/Tabs";
import TabPane from "../tab/TabPane";
import '../css/style.scss';
export default class Charper0101 extends Component {
  username = React.createRef();
  password = React.createRef();
  static propTypes = { 
    
  }; 
  static defaultProps = { 
    
  }; 

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.onChange1 = this.onChange1.bind(this);
    this.state = {
      count: 0,
      name1: "tab1",
      name2: "tab2",
      name3: "tab3",
      activeIndex: 9,
      index:0,
    };
  }

  onChange1(index) {
    console.log("onChange1:index:"+index);
    this.setState({
      count: this.state.count + 1,
      activeIndex: parseInt(index),
    });
  }
  handleChange(e) {
    //e.preventDefault();
    this.setState({
      count: this.state.count + 1,
      activeIndex: parseInt(e.target.value),
    });

    // console.log(parseInt(e.target.value));
  }
  render() {
    return (
      <div>
      
        <br />
        <Tab name={this.state.name1}></Tab> <Tab name={this.state.name2}></Tab>{" "}
        <Tab name={this.state.name3}></Tab>
        <div>
          <div className="operator">
            <span>切换 Tab:</span>
            <select value={this.state.activeIndex} onChange={this.handleChange}>
              {/* <option value="9">select</option> */}
              <option value="9">選択</option>
              <option value="0">Tab 11</option>
              <option value="1">Tab 22</option>
              <option value="2">Tab 33</option>
              
            </select>
          </div>
          
          {this.state.activeIndex}
          
          <Tabs
            activeIndex={this.state.activeIndex}
            onChange1={index=>this.onChange1(index)}
            className="tabs-bar"
          >
            <TabPane order="0" tab={"Tab 0"}>
              第一个 Tab 里的内容
            </TabPane>
            <TabPane order="1" tab={"Tab 1"}>
              第二个 Tab 里的内容
            </TabPane>
            <TabPane order="2" tab={"Tab 2"}>
              第三个 Tab 里的内容
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}
