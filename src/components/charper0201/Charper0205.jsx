import React, { Component } from "react";
class Charper0205 extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { value } = this.refs.name;
    console.log(value);
    const { id } = this.refs.id;
    console.log(id);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input ref="name" type="text" defaultValue="Hangzhou" />
        <input ref="id" type="text" defaultValue="id" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default Charper0205;
