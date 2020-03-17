import React from 'react'

import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Table,
  } from "reactstrap";

    const TableTrans = ({ transactions }) => {
      return (
        <div>
              <Card>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Date</th>
                      <th>Description</th>
                      <th>From</th>
                      <th>To</th>
                      <th className="text-center">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                  {transactions.map((transaction) => (    
                    <tr>
                      <td>{transaction.items.t_date}</td>
                      <td>{transaction.items.description}</td>
                      <td>{transaction.items.from_ac}</td>
                      <td>{transaction.items.to_ac}</td>
                      <td className="text-center">{transaction.items.amount}</td>
                    </tr>
                   ))} 
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          
        </div>
      )
    };

export default TableTrans



