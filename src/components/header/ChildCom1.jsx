import React from "react";
class ChildCom1 extends React.Component {
  valueToParent(value) {
    this.props.onValue(value);
  }
  vTop(value) {
    this.props.onValue(value);
  }
  render() {
    return (
      <div>
        <h2>子组件</h2>
        <div>
          <a onClick={this.valueToParent.bind(this, 222)}>向父组件传值222</a>
          <a onClick={this.vTop.bind(this, 333)}>333</a>
        </div>
      </div>
    );
  }
}
export default ChildCom1;
