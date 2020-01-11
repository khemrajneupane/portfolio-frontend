import React from "react";
import { Link } from "react-router-dom";
import "../../src/index.css";
const PortfolioList = ({ portfolio }) => (
  <div className="flex-b">
    <h2>My Project Lists</h2>
    <ul className="list-unstyled">
      {portfolio.map(list => (
        <li key={list.id}>
          <Link to={`/portfolio/${list.id}`}>{list.content} </Link>
        </li>
      ))}
    </ul>
  </div>
);
export default PortfolioList;
