import React, { Component, PropTypes } from 'react';
class Tabs extends Component {
    constructor(props) {
        super(props);
    } 
    
    render() {
        return <div className="ui-tabs">{this.props.name}</div>;
    }
};
export default Tabs;