import React from "react";
const PortfolioDescription = ({ portfolio }) => {
  console.log("from portfolio ", portfolio);
  return (
    <div>
      <h2>{portfolio.content}</h2>
      <p>Application Type: {portfolio.type}</p>
      <p>Technologies: {portfolio.technology}</p>
      <p>
        App URL: <a href={portfolio.info}>{portfolio.info}</a>
      </p>
    </div>
  );
};
export default PortfolioDescription;
