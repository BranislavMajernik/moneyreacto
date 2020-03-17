/*!

=========================================================
* Black Dashboard React v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Select,
  Row,
  Col
} from "reactstrap";


import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar, Doughnut } from "react-chartjs-2";

// reactstrap components

// core components
import {
   chartExample5
} from "variables/charts.jsx";

class Accounts extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="8">
              <Card>
                <CardHeader>
                  <h5 className="title">Create Account</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup>
                          <label>Select account</label>
                          <Input
                            defaultValue="Reactolabs Inc."
                            placeholder="Account_name"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="3">
                        <FormGroup>
                          <label>Type</label>
                          <Input
                            defaultValue="Mixed"
                            placeholder="Type"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="4">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            Portfolio setup
                          </label>
                          <Input placeholder="ETC:MUTUAL:CFD" type="email" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="4">
                        <FormGroup>
                          <label>Average Profit per Year</label>
                          <Input
                            defaultValue="10%"
                            placeholder=""
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="4">
                        <FormGroup>
                          <label>Type of investment</label>
                          <Input
                            defaultValue="Monthly"
                            placeholder="Last Name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="4">
                        <FormGroup>
                          <label>Amount of investment</label>
                          <Input
                            defaultValue="200"
                            placeholder="Last Name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Source of investment</label>
                          <Input
                            defaultValue="Saving/Bank Account"
                            placeholder="Source"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="4">
                        <FormGroup>
                          <label>Notification</label>
                          <Input
                            defaultValue="branislav.majernik@oracle.com"
                            placeholder="email"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="4">
                        <FormGroup>
                          <label>Withdraw</label>
                          <Input
                            defaultValue="Per year"
                            placeholder="Country"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="4">
                        <FormGroup>
                          <label>Amount</label>
                          <Input placeholder="ZIP Code" defaultValue="1500" type="number" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="8">
                        <FormGroup>
                          <label>About Account</label>
                          <Input
                            cols="80"
                            defaultValue="Focused on profit:  AI automatic optimalization and rebalancing, Tax smart investing in ETF index funds. On average a 10% higher annual return compared to the traditional mutual funds.                               
                            "
                            placeholder="Here can be your description"
                            rows="4"
                            type="textarea"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button className="btn-fill" color="primary" type="submit">
                    Save
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md="4">
            <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Portfolio balance</h5>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Doughnut
                      data={chartExample5.data}
                      options={chartExample5.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Accounts;
