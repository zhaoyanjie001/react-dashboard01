import React, { Component } from "react";
import PropTypes from "prop-types";
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
class Charper0211 extends Component {
  static childContextTypes = {
    color: PropTypes.string,
    test: PropTypes.string,
  };
  getChildContext() {
    return {
      color: "blue",
      test: "red",
    };
  }
  
  render() {
    // const { list } = this.props;
    let list = [{"text":"123", "checked":false}, {"text":"321", "checked":true}];
    return (
      <div>
        <ul>
          {list.map((entry, index) => (
            <ListItem key={`list-${index}`} value={entry.text} />
          ))}
        </ul>
      </div>
    );
  }
}
export default Charper0211;
