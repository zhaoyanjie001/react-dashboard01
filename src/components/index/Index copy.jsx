import React, { Component } from "react";
// import { Outlet } from "react-router-dom";

import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "../card/Card"

export default class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
  }

  render() {
    return (
      <div>
        
        {/* <Outlet /> */}
        
       
{/* 
        <Row xs={1} md={2} className="g-4">
        <Col >
          <Card className="bg-dark text-white" style={{ backgroundColor: "red", }}>
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card><br/>
          <Card className="bg-dark text-white" style={{ backgroundColor: "red" }}>
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
          </Col>
        </Row> */}
      </div>
    );
  }
}
