import React from "react";
class ChildCom extends React.Component {
  render() {
    return (
      <div>
        <h2>子组件</h2>
        <div>{this.props.content}</div>
      </div>
    );
  }
}
export default ChildCom;
