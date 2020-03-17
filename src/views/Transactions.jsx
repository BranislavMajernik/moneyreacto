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

import TableAc from '../components/TableAc.jsx';
import TableAl from '../components/TableAl.jsx';

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

class Tables extends React.Component {

  state = {
    contacts: [],
    albums:[],
    transactions:[]
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data }) 
    })
    fetch('https://bnwcsnniopjzils-atpdbbmsk.adb.uk-london-1.oraclecloudapps.com/ords/books_admin/transactions/list/')
    .then(res => res.json())
    .then((data) => {
      this.setState({ transactions: data }) 
    })
    .catch(console.log)
  }

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12"> 
            <TableAc contacts={this.state.contacts} />
            </Col>
            <Col md="12">
              <Card className="card-plain">
                <CardHeader>
                  <CardTitle tag="h4">Table</CardTitle>
                  <p className="category">Here is a subtitle for this table</p>
                </CardHeader>
                <CardBody>
                <TableAl albums={this.state.albums} />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Tables;
