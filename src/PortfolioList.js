import React from "react";
import { Link } from "react-router-dom";
const PortfolioList = ({ portfolio }) => (
  <div>
    <h2>My Project Lists</h2>
    <ul>
      {portfolio.map(list => (
        <li key={list.id}>
          <Link to={`/portfolio/${list.id}`}>{list.content} </Link>
        </li>
      ))}
    </ul>
  </div>
);
export default PortfolioList;
