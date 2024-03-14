import React, { Component } from 'react';
class Charper0202 extends Component {
    constructor(props) {
        super(props);
        // this.handleTextChange = this.handleTextChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            textValue: '',
            radioValue: '',
            coffee:  ['beijing', 'shanghai'],
            area:'',
        };
    }
    handleChange(e) {
        const { checked, value } = e.target;
        let { coffee } = this.state;
        if (checked && coffee.indexOf(value) === -1) {
            coffee.push(value);
        } else {
            coffee = coffee.filter(i => i !== value);
        }
        console.log(e.target.value);
        console.log(this.state.coffee);

        const { options } = e.target;
        const area = Object.keys(options)
        .filter(i => options[i].selected === true)
        .map(i => options[i].value);

        this.setState({
            radioValue: e.target.value,
            coffee,
            area,
        });
    }
    handleTextChange(e) {
        this.setState({
            textValue: e.target.value,
            radioValue: e.target.value,
        });
        console.log(e.target.value);
    }
    handleTextChange1 = (e) => {
        this.setState({
            textValue: e.target.value,
        });
        console.log(this.state.textValue);
    }
    componentWillReceiveProps() {
        console.log(this.state.radioValue);
    }
    render() {
        const { textValue, radioValue, coffee,area } = this.state;
        return (
            <div>
                <p>输入框： <input type="text" value={textValue} onChange={this.handleTextChange.bind(this)} /></p><br />
                <p>输入框： <input type="text" value={textValue} onChange={this.handleTextChange1} /></p>

                <p>gender:</p>
                <label> male:
                    <input
                        type="radio"
                        value="male"
                        checked={radioValue === 'male'}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    female:
                    <input
                        type="radio"
                        value="female"
                        checked={radioValue === 'female'}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    other:
                    <input
                        type="radio"
                        value="other"
                        checked={radioValue === 'other'}
                        onChange={this.handleChange}
                    />
                </label>
                <div>
                    <p>请选择你最喜欢的咖啡：</p>
                    <label>
                        <input
                            type="checkbox"
                            value="Cappuccino"
                            checked={coffee.indexOf('Cappuccino') !== -1}
                            onChange={this.handleChange}
                        />
                        Cappuccino
                    </label>
                    <br />
                    <label>
                        <input
                            type="checkbox"
                            value="CafeMocha"
                            checked={coffee.indexOf('CafeMocha') !== -1}
                            onChange={this.handleChange}
                        />
                        CafeMocha
                    </label>
                    <br />
                    <label>
                        <input
                            type="checkbox"
                            value="CaffeLatte"
                            checked={coffee.indexOf('CaffeLatte') !== -1}
                            onChange={this.handleChange}
                        />
                        Caffè Latte
                    </label>
                    <br />
                    <label>
                        <input
                            type="checkbox"
                            value="Machiatto"
                            checked={coffee.indexOf('Machiatto') !== -1}
                            onChange={this.handleChange}
                        />
                        Machiatto
                    </label>
                </div>

                <select value={area} onChange={this.handleChange} multiple={true}>
                    <option value="beijing">北京</option>
                    <option value="shanghai">上海</option>
                    <option value="hangzhou">杭州</option>
                </select>

            </div>
        );
    }
}
export default Charper0202;