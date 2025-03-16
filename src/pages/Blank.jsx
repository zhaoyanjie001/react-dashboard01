// import React, { useState, useRef } from 'react';
// import useFormState from '@arco-design/web-react/es/Form/hooks/useState';
// import { useState } from 'react';
// import { Document, Page } from 'react-pdf';
// import Card from "../components/card/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import { Bar } from 'react-chartjs-2'
import Box from '../components/box/Box'
import DashboardWrapper, { DashboardWrapperMain, DashboardWrapperRight } from '../components/dashboard-wrapper/DashboardWrapper'
import SummaryCard, { SummaryCardSpecial } from '../components/summary-card/SummaryCard'
import { colors, data } from '../constants'


const Blank = () => {
  return (
    <div>
        <DashboardWrapper>
            <DashboardWrapperMain>
                <div className="row">
                    <div className="col-8 col-md-12">
                        <div className="row">
                            {
                                data.summary.map((item, index) => (
                                    <div key={`summary-${index}`} className="col-6 col-md-6 col-sm-12 mb">
                                        <SummaryCard item={item} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                  
                </div>
               
            </DashboardWrapperMain>

        </DashboardWrapper>
      {/* <CardGroup>
        <Card>
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup> */}

      {/* 
          <Row>
              
              <Col>
                <Card purple="card-purple">This is a blank page</Card>
              </Col>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Col>
                <Card>This is a blank page</Card>
              </Col>
             
             
          </Row> */}
    </div>
  );
};

export default Blank;
