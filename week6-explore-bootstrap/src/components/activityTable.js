// components/RecentActivity.js
import React from "react";
import { Table } from "react-bootstrap";

const RecentActivity = () => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>User</th>
        <th>Action</th>
        <th>Time</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>John Doe</td>
        <td>Logged in</td>
        <td>2 mins ago</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jane Smith</td>
        <td>Placed an Order</td>
        <td>15 mins ago</td>
      </tr>
    </tbody>
  </Table>
);

export default RecentActivity;
