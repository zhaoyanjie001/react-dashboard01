import React, { Component } from 'react';
import classnames from 'classnames';
// import PropTypes from 'prop-types';

class TabNav extends Component {

  getTabs() {
    const { panels, classPrefix, activeIndex } = this.props;
    console.log("getTabs:activeIndex:"+activeIndex);
    return React.Children.map(panels, (child) => {
      if (!child) { return; }

      const order = parseInt(child.props.order, 10);

      let classes = classnames({
        [`${classPrefix}-tab`]: true,
        [`${classPrefix}-active`]: activeIndex === order,
        [`${classPrefix}-disabled`]: child.props.disabled,
      });

      let events = {};
      if (!child.props.disabled) {
        events = {
          onClick: this.props.onTabClick.bind(this, order),
        };
      }
      
      const ref = {};
      console.log("activeIndex:"+activeIndex);
      // if (activeIndex === order) {
      //   ref.ref = 'activeTab';
      // }

      return (
        <li
          role="tab"
          aria-disabled={child.props.disabled ? 'true' : 'false'}
          aria-selected={activeIndex === order? 'true' : 'false'}
          {...events}
          className={classes}
          key={order}
          {...ref}
        >
          {child.props.tab}
        </li>
      );
    });
  }

  render() {
    const { classPrefix } = this.props;

    const rootClasses = classnames({
      [`${classPrefix}-bar`]: true,
    });

    const classes = classnames({
      [`${classPrefix}-nav`]: true,
    });

    return (
      <div className={rootClasses} role="styles.tablist">
        <ul className={classes}>
          {this.getTabs()}
        </ul>
      </div>
    );
  }
}

export default TabNav;
