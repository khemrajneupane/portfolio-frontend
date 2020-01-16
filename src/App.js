import React, { useState, useEffect } from "react";
import "../src/index.css";
import Navigation from "./navigation/Navigation";
import portfolioServices from "./services/Portfolios";
import workexperienceServices from "./services/Workexperiences";
import Notification from "./components/Notification";

//import SendMessage from "./components/SendMessage";
import loginService from "./services/login";
import LoginForm from "./components/LoginForm";

//import messageServices from "./services/Messages";

const App = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [workexperience, setWorkexperience] = useState([]);
  const [notification, setNotification] = useState("");
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  //window.localStorage.clear();

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

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);

      setUser(user);

      portfolioServices.setToken(user.token);
      workexperienceServices.setToken(user.token);
    }
  }, []);

  const handleUsernameChange = event => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

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

  /**handle login function */
  const handleLogin = async event => {
    event.preventDefault();
    try {
      const user = await loginService.login({
        username,
        password
      });
      console.log("handleLogin user info", user);
      window.localStorage.setItem("loggedUser", JSON.stringify(user));

      portfolioServices.setToken(user.token);
      workexperienceServices.setToken(user.token);
      setUser(user);
      setUsername(username);
      setPassword("");
      setNotification(`Welcome ${username}!`);
      setTimeout(() => {
        setNotification(null);
      }, 5000);
    } catch (exception) {
      setNotification("Wrong credentials");
      setTimeout(() => {
        setNotification(null);
      }, 5000);
    }
  };
  /**delete */

  return (
    <div>
      <Notification notification={notification} />
      {user === null ? (
        <div className="container">
          <LoginForm
            onSubmit={handleLogin}
            handleUsernameChange={handleUsernameChange}
            handlePasswordChange={handlePasswordChange}
            username={username}
            password={password}
          />
        </div>
      ) : (
        <div>
          <Navigation
            portfolio={portfolio}
            setNotification={setNotification}
            setPortfolio={setPortfolio}
            workexperience={workexperience}
            setWorkexperience={setWorkexperience}
            addNew={addNew}
            addNewWork={addNewWork}
          />
        </div>
      )}
    </div>
  );
};

export default App;
