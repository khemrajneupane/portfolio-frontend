import React from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
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
            <th>URL</th>
            <th>Rate</th>
          </tr>

          <tr className="bg-success">
            <th>{portfolio.type}</th>
            <td>{portfolio.technology}</td>

            <td id={portfolio.info.slice(8, 17)}>
              <a href={portfolio.info}>{portfolio.info}</a>
            </td>
            <td>{portfolio.votes}</td>
          </tr>
        </tbody>
      </Table>
      <div>
     
           <Link to ="/portfolio"><ArrowBackIosIcon color='primary'/>BACK</Link>
      
      
      </div>
    </div>
  );
};
export default PortfolioDescription;
