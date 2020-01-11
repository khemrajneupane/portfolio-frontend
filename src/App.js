import React, { useState, useEffect } from "react";
import "../src/index.css";
import Navigation from "./navigation/Navigation";
import portfolioServices from "./services/Portfolios";

const App = () => {
  const [portfolio, setPortfolio] = useState([]);

  const [notification, setNotification] = useState("");

  useEffect(() => {
    portfolioServices.getAll().then(response => {
      setPortfolio(response);
    });
  }, []);
  const addNew = newPortfolio => {
    newPortfolio.id = (Math.random() * 10000).toFixed(0);
    portfolioServices.create(newPortfolio);
    setPortfolio(portfolio.concat(newPortfolio));
    setNotification(`a new portfolio ${newPortfolio.content} created!`);
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };
  return (
    <Navigation
      portfolio={portfolio}
      setNotification={setNotification}
      setPortfolio={setPortfolio}
      addNew={addNew}
    />
  );
};

export default App;
