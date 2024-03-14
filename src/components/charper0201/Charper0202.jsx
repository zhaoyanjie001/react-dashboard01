import React, { Component } from 'react';
class Charper0202 extends Component {
    constructor(props) {
        super(props);
        // this.handleTextChange = this.handleTextChange.bind(this);
        this.state = {
            textValue:'',
        };
    }
    handleTextChange(e) {
        this.setState({
            textValue: e.target.value,
        });
        console.log(this.state.textValue);
    }
    handleTextChange1=(e) => {
        this.setState({
            textValue: e.target.value,
        });
        console.log(this.state.textValue);
    }
    render() {
        const { textValue } = this.state;
        return (
            <div>
                <p>输入框： <input type="text" value={textValue} onChange={this.handleTextChange.bind(this)}/></p><br/>
                <p>输入框： <input type="text" value={textValue} onChange={this.handleTextChange1}/></p>
            </div>
        );
    }
}
export default  Charper0202 ;