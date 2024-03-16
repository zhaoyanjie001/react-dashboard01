import React, { Component } from "react";

class Charper0210 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checklist: [
        { name: "全选", checked: false },
        { name: "Amethyst", checked: false },
        { name: "Cloud", checked: false },
        { name: "Lanlan", checked: false },
      ],
    };
  }

  render() {
    const that = this;
    return (
      <div >
        <div>这是全选取消全选的demo</div>

        {this.state.checklist.length
          ? this.state.checklist.map(function (item, index) {
              return (
                <div key={index}>
                  <label>
                    <input
                      type="checkbox"
                      onChange={() => {
                        that.handleChange(item);
                      }}
                      checked={item.checked}
                    />
                    {item.name}
                  </label>
                </div>
              );
            })
          : ""}
      </div>
    );
  }

  //改变第一个checkbox的选中状态
  changeFirstItem(value) {
    let checklist = [...this.state.checklist];
    checklist.splice(0, 1, { name: "全选", checked: value });
    setTimeout(() => {
      this.setState({
        checklist: checklist,
      });
    }, 0);
  }

  //根据全选checkbox的选中状态设置其他选项的选中状态
  handleChange(item) {
    item.checked = !item.checked;
    if (item.name === "全选") {
      if (item.checked) {
        this.state.checklist.forEach((i, index) => (i.checked = true));
      } else {
        this.state.checklist.forEach((i, index) => (i.checked = false));
      }
    }

    //除了第一个其他都勾选的话，第一个就全选
    let res = this.state.checklist.every((i) => {
      if (i.name !== "全选" && !i.checked) {
        return false;
      }
      return true;
    });

    if (res) {
      this.changeFirstItem(true);
    } else {
      this.changeFirstItem(false);
    }

    //每点击一次state更新一次
    this.setState({
      checklist: this.state.checklist,
    });
  }
}

export default Charper0210;
