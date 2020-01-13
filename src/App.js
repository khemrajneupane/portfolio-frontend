import React, { useState, useEffect } from "react";
import "../src/index.css";
import Navigation from "./navigation/Navigation";
import portfolioServices from "./services/Portfolios";
import workexperienceServices from "./services/Workexperiences";

const App = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [workexperience, setWorkexperience] = useState([]);
  const [notification, setNotification] = useState("");

  useEffect(() => {
    portfolioServices.getAll().then(response => {
      setPortfolio(response);
    });
  }, []);

  useEffect(() => {
    workexperienceServices.getAll().then(response => {
      setWorkexperience(response);
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
  const addNewWork = newWork => {
    newWork.id = (Math.random() * 10000).toFixed(0);
    workexperienceServices.create(newWork);
    setPortfolio(workexperience.concat(newWork));
    setNotification(`a new portfolio ${newWork.content} created!`);
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  return (
    <Navigation
      portfolio={portfolio}
      setNotification={setNotification}
      setPortfolio={setPortfolio}
      workexperience={workexperience}
      setWorkexperience={setWorkexperience}
      addNew={addNew}
      addNewWork={addNewWork}
    />
  );
};

export default App;
