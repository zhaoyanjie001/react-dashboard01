import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import classnames from 'classnames';
import TabNav from './TabNav';
import TabContent from './TabContent';
import styles from "../css/style.scss";
class Tabs extends Component {

  static defaultProps = {
    classPrefix: 'tabs',
    onChange: (activeIndex, prevIndex) => {
      console.log("onChange:activeIndex:"+activeIndex.activeIndex);      
    },
  };

  constructor(props) {
    super(props);

    const currProps = this.props;

    this.handleTabClick = this.handleTabClick.bind(this);

    let activeIndex = 0;
    // console.log("this.props.defaultActiveIndex="+this.props.defaultActiveIndex);
    // console.log("this.props.activeIndex="+this.props.activeIndex);

    if ('activeIndex' in currProps) {
      activeIndex = currProps.activeIndex;
    } else if ('defaultActiveIndex' in currProps) {
      activeIndex = currProps.defaultActiveIndex;
    }
    // console.log("onChange1:activeIndex:"+this.props.activeIndex);

    this.state = {
      activeIndex:activeIndex,
      prevIndex: activeIndex,
    };
  }
  
  componentWillReceiveProps(nextProps) {
    if ('activeIndex' in nextProps) {
      
      this.setState({
        activeIndex: nextProps.activeIndex,
      });
    }
    // 
  }
  componentDidMount() {
    console.log("componentDidMount:this.props.activeIndex="+this.props.activeIndex);
  }

  handleTabClick(activeIndex) {
    const prevIndex = this.state.activeIndex;
    console.log("handleTabClick:activeIndex:"+activeIndex);
    // if (this.state.activeIndex !== activeIndex &&
    //     'activeIndex' in this.props) {
      this.setState({
        activeIndex,
        prevIndex,
      });
      this.props.onChange({ activeIndex, prevIndex });
      this.props.onChange1(activeIndex);
    // }
  }

  renderTabNav() {
    const { classPrefix, children } = this.props;
    console.log('renderTabNav:this.state.activeIndex:'+this.state.activeIndex);
    return (
      <TabNav
        key="tabBar"
        classPrefix={classPrefix}
        onTabClick={this.handleTabClick}
        panels={children}
        activeIndex={this.state.activeIndex}
      />
    );
  }

  renderTabContent() {
    const { classPrefix, children } = this.props;
    return (
      <TabContent
        key="tabcontent"
        classPrefix={classPrefix}
        activeIndex={this.state.activeIndex}
        panels={children}
      />
    );
  }

  render() {
    const { className } = this.props;
    const cx = classnames(className, 'styles.ui-tabs');
    return (
      <div className={cx}>
        {this.renderTabNav()}
        {this.renderTabContent()}
      </div>
    );
  }
}

export default Tabs;
