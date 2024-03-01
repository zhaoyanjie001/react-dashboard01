import React from "react";
import ChildCom1 from "./ChildCom1.jsx";
class ParentCom1 extends React.Component {
  state = {
    getChildValue: "",
    getChildValue1: "",
  };
  getChildValue(value) {
    this.setState({
      getChildValue: value,
    });
  }
  getChildValue1(value){
    this.setState({
      getChildValue1:value,
    });
  }
  render() {
    return (
      <div>
        
        <ChildCom1 onValue={this.getChildValue.bind(this)} />
        <br/>
        <ChildCom1 onValue={this.getChildValue1.bind(this)} />
        <br/>
        <h1>父组件</h1>
        <div>子组件过来的值为：{this.state.getChildValue}</div>
        <br/>
        <div>子组件过来的值为1：{this.state.getChildValue1}</div>
      </div>
    );
  }
}
export default ParentCom1;
