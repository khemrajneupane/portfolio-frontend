import React from "react";
import { Link } from "react-router-dom";
import "../../src/index.css";
import { Table } from 'react-bootstrap'
const PortfolioList = ({ portfolio }) => (
  <div className="container">
    <h2>My Project Lists</h2>
    <div>
        
        <Table striped bordered hover variant="dark">
        <thead>

        </thead>
        <tbody>
        <tr>
        <th>Technology</th>
        <th>App Description</th>
        </tr>
        {portfolio.map(list =>
          <tr key={list.id}>
          <th>{list.technology}</th>
            <td>
              <Link to={`/portfolio/${list.id}`}>{list.content} </Link>
            </td>
          
          </tr>
 
        )}
     
     </tbody>
          </Table>
  </div>
  </div>
);
export default PortfolioList;

/**


      <ul className="list-unstyled">
      {portfolio.map(list => (
        <li key={list.id}>
          <Link to={`/portfolio/${list.id}`}>{list.content} </Link>
        </li>
      ))}
    </ul>
 */