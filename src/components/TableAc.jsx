import React from 'react'

import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Table,
  } from "reactstrap";

    const TableAc = ({ contacts }) => {
      return (
        <div>
              <Card>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Company</th>
                      <th className="text-center">Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                  {contacts.map((contact) => (    
                    <tr>
                      <td>{contact.name}</td>
                      <td>{contact.email}</td>
                      <td>{contact.company.catchPhrase}</td>
                  <td className="text-center">2000</td>
                    </tr>
                   ))} 
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          
        </div>
      )
    };

export default TableAc



