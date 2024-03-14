import React, { Component } from 'react';
class Charper0203 extends Component {
    componentDidMount() {
        this.refs.button.addEventListener('click', e => {
            this.handleClick(e);
        });
    }
    handleClick(e) {
        console.log(e);
    }
    componentWillUnmount() {
        this.refs.button.removeEventListener('click');
    }
    render() {
        return <button ref="button">Test</button>;
    }
} export default  Charper0203 ;