import React from "react";
import { Table } from 'react-bootstrap'
const PortfolioDescription = ({ portfolio }) => {
  console.log("from portfolio ", portfolio.content);
  return (
    <div>
 <h2>{portfolio.content}</h2>
  <Table striped bordered hover variant="dark">
        <thead>

        </thead>
        <tbody>
        <tr>
        <th>Application Type</th>
        <th>Technologies</th>
        <th>URL/Deployment</th>
        <th>My Ratings</th>
        </tr>
        
          <tr>
          <th>{portfolio.type}</th>
            <td>
              {portfolio.technology}
            </td>

            <td>
              <a href={portfolio.info}>{portfolio.info}</a>
              </td>
            <td>
              {portfolio.votes}
            </td>
          
          </tr>
 
       
     
     </tbody>
          </Table> 
    </div>
  );
};
export default PortfolioDescription;
/**        

          
          
                <h2>{portfolio.content}</h2>
      <p>Application Type: {portfolio.type}</p>
      <p>Technologies: {portfolio.technology}</p>
      <p>
        App URL: <a href={portfolio.info}>{portfolio.info}</a>
      </p>
          
          
          */
