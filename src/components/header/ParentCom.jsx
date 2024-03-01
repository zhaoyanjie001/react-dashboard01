import React from "react";
import ChildCom from "./ChildCom.jsx";
class ParentCom extends React.Component {
  render() {
    return (
      <div>
        <h1>父组件</h1>
        <ChildCom content={"我是父级过来的内容"} />
      </div>
    );
  }
}
export default ParentCom;
