import React, { Component } from "react";
class Charper0206 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: 18,
    };
  }
  handleChange(name, e) {
    const { value } = e.target;
    console.log(name);
    // 这里只能处理直接赋值这种简单的情况，复杂的处理建议使用 switch(name) 语句
    if(name === "name"){
      this.setState({
        name: value,
      });
      console.log(this.state.name);
    } else if(name === "age"){
      this.setState({
        age: value,
      });
      console.log(this.state.age);
    } 

    
  }
  render() {
    const { name, age } = this.state;
    return (
      <div>
        <input value={name} onChange={this.handleChange.bind(this, "name")} />
        <input value={age} onChange={this.handleChange.bind(this, "age")} />
      </div>
    );
  }
}
export default Charper0206;
