import React, { Component } from "react";

class ListItem extends Component {
  static defaultProps = {
    text: "",
    checked: false,
  };
  render() {
    return (
      <li>
        <input
          type="checkbox"
          checked={this.props.checked}
          onChange={this.props.onChange}
        />
        <span>{this.props.value}</span> {console.log(this.props.checked)}
      </li>
      
    );
  }
}
class Charper0209 extends Component {
  static defaultProps = {
    list: [{"text":"123", "checked":false}, {"text":"321", "checked":true}],
    handleItemChange: () => {
      console.log("handleItemChange");
    },
  };
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list.map((entry) => ({
        text: entry.text,
        checked: entry.checked,
      })),
    };
  }
  onItemChange(entry) {
    const { list } = this.state;

    this.setState({
      list: list.map((prevEntry) => ({
        text: prevEntry.text,
        checked:
          prevEntry.text === entry.text
            ? !prevEntry.checked
            : prevEntry.checked,
      })),
    });
    this.props.handleItemChange(entry);
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.list.map((entry, index) => { 
             console.log(entry.checked);
           return  <ListItem
              key={`list-${index}`}
              value={entry.text}
              checked={entry.checked}
              onChange={this.onItemChange.bind(this, entry)}
            />
            
          })}
         
        </ul>
      </div>
    );
  }
}

export default Charper0209;
