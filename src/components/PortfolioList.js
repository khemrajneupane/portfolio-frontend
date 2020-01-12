import React from "react";
import { Link } from "react-router-dom";
import "../../src/index.css";
import { Table } from "react-bootstrap";
const PortfolioList = ({ portfolio }) => (
  <div className="container">
    <h2>My Project Lists</h2>

    <Table striped bordered hover varient="dark">
      <thead></thead>
      <tbody>
        <tr className="bg-primary">
          <th>Technology</th>
          <th>App Description</th>
        </tr>
        {portfolio.map(list => (
          <tr key={list.id}>
            <th>{list.technology}</th>
            <td>
              <Link to={`/portfolio/${list.id}`}>{list.content} </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
);
export default PortfolioList;
