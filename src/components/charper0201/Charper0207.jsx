import React, { Component } from "react";
import classNames from "classnames";
import CSSModules from "react-css-modules";
import styles from "../../views/dialog.css";
class Charper0207 extends Component {
  render() {
    const cx = classNames({
      // confirm: !this.state.disabled,
      // disabledConfirm: this.state.disabled,
    });
    return (
      <div styleName="root">
        <a styleName={cx}>Confirm</a>
        ...
      </div>
    );
  }
}
export default Charper0207;

