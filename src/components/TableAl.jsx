import React from 'react'

import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Table,
  } from "reactstrap";

    const TableAl = ({ albums }) => {
      return (
        <div>
          <center><h1>Album List</h1></center>
              <Card>
              <CardHeader>
                <CardTitle tag="h4">Album Table</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Id</th>
                      <th>Title</th>
                    </tr>
                  </thead>
                  <tbody>
                  {albums.map((album) => (    
                    <tr>
                      <td>{album.id}</td>
                      <td>{album.title}</td>
                    </tr>
                   ))} 
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          
        </div>
      )
    };

export default TableAl



