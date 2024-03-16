import React, { Component } from "react";

const ListItem = ({ value }) => {
  return (
    <li>
      <span>{value}</span>
    </li>
  );
}
const ListTitle = ({ title }) => {
  return (
    <div>
      <li>
        <span>{title}</span>
      </li>
    </div>
  );
};

const Charper0208 = () => {
  let list = ["name", "id", "sex"];
  let title = "this is test";

  return (
    <div>
      <h1>一级标题</h1>
      <h2>二级标题</h2>
      <h2>title</h2>
      <ListTitle title={title} />
      <ul>
        {
          list.map((value,index) => {
            // console.log(value);
            return <ListItem key={`list-${index}`}  value={value} />
          })
        }
      </ul>
    </div>
  );
};
export default Charper0208;
