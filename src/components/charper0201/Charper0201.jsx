import React, { Component } from 'react';
class Charper0201 extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleTextareaChange = this.handleTextareaChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.state = {
            inputValue: '',
            textareaValue: '',
            textValue:'',
        };
    }
    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value,
        });
    }
    handleTextareaChange(e) {
        this.setState({
            textareaValue: e.target.value,
        });
        
    }
    handleTextChange(e) {
        this.setState({
            textValue: e.target.value,
        });
        console.log(this.state.textValue);
    }
    render() {
        const { inputValue, textareaValue, textValue } = this.state;
        return (
            <div>
                <p>单行输入框： <input type="text" value={inputValue}
                    onChange={this.handleInputChange} /></p>
                <p>多行输入框： <textarea value={textareaValue}
                    onChange={this.handleTextareaChange} /></p>
                <p>输入框： <input type="text" value={textValue} onChange={this.handleTextChange}/></p>
            </div>
        );
    }
}
export default  Charper0201 ;