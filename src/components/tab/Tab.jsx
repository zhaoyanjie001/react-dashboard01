import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
class Tab extends Component {
    constructor(props) {
        super(props);
    } 
    
    render() {
        return <div className="ui-tabs">{this.props.name}</div>;
    }
};
export default Tab;