import React from "react";
import { Table } from "react-bootstrap";
const PortfolioDescription = ({ portfolio }) => {
  return (
    <div className="container">
      <h2>{portfolio.content}</h2>
      <Table>
        <thead></thead>
        <tbody>
          <tr className="bg-primary">
            <th>Application Type</th>
            <th>Technologies</th>
            <th>URL/Deployment</th>
            <th>Rate</th>
          </tr>

          <tr className="bg-success">
            <th>{portfolio.type}</th>
            <td>{portfolio.technology}</td>

            <td>
              <a href={portfolio.info}>{portfolio.info}</a>
            </td>
            <td>{portfolio.votes}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
export default PortfolioDescription;
