import React, { Component } from 'react';
import img from './qr.jpg';
class Charper0204 extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleClickQr = this.handleClickQr.bind(this);
        this.state = {
            active: false,
        };
    }
    // componentDidMount() {
    //     document.body.addEventListener('click', e => {
    //         this.setState({
    //             active: !this.state.active,
    //         });
    //     });
    //     console.log(this.state.active);
    // }
    componentWillUnmount() {
        document.body.removeEventListener('click');
    }
    handleClick() {
        this.setState({
            active: !this.state.active,
        });
        console.log("this.state.active:"+this.state.active);
    }
    handleClickQr(e) {
        e.stopPropagation();
    }
    render() {
        return (
            <div className="qr-wrapper">
                <button className="qr" onClick={this.handleClick}>qr code</button>
                <div
                    className="code"
                    style={{ display: this.state.active ? 'block' : 'none' }}
                    onClick={this.handleClickQr}
                >
                    <img src={img} alt="qr" />
                </div>
            </div>
        );
    }
} export default Charper0204;