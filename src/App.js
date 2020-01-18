import React, { useState, useEffect } from "react";
import "../src/index.css";
import Navigation from "./navigation/Navigation";
import portfolioServices from "./services/Portfolios";
import workexperienceServices from "./services/Workexperiences";
import Notification from "./components/Notification";

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

  const [content, setContent] = useState("");
  const [technology, settechnology] = useState("");
  const [info, setInfo] = useState("");
  const [type, setType] = useState("");
  const [votes, setVotes] = useState("");

  const [job_title, setJob_title] = useState("");
  const [company, setCompany] = useState("");
  const [start_date, setStart_date] = useState("");
  const [end_date, setEnd_date] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [rating, setRating] = useState("");

  //window.localStorage.clear();

  /************************************************ */
  const handleJob_titleChange = event => {
    setJob_title(event.target.value);
  };
  const handleCompanyChange = event => {
    setCompany(event.target.value);
  };
  const handleStart_dateChange = event => {
    setStart_date(event.target.value);
  };
  const handleEnd_dateChange = event => {
    setEnd_date(event.target.value);
  };
  const handleResponsibilityChange = event => {
    setResponsibilities(event.target.value);
  };
  const handleRatingChange = event => {
    setRating(event.target.value);
  };
  /********************************************************* */
  const handleContentChange = event => {
    setContent(event.target.value);
  };

  const handleTechnologyChange = event => {
    settechnology(event.target.value);
  };
  const handleInfoChange = event => {
    setInfo(event.target.value);
  };
  const handleTypeChange = event => {
    setType(event.target.value);
  };
  const handleVotesChange = event => {
    setVotes(event.target.value);
  };

  useEffect(() => {
    portfolioServices.getAll().then(response => {
      setPortfolio(response);
    });
  }, [portfolio]);

  useEffect(() => {
    workexperienceServices.getAll().then(response => {
      setWorkexperience(response);
    });
  }, [workexperience]);

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

  /**add new portfolio */
  const addNew = async () => {
    const newObject = {
      content,
      technology,
      info,
      type,
      votes
    };

    try {
      await portfolioServices.create(newObject, user.token);
      setPortfolio(portfolio.concat(newObject));
      setNotification(
        `a new blog ${newObject.info} by ${newObject.technology} added `
      );
      setTimeout(() => {
        setNotification(null);
      }, 5000);
      //setTitle("");
      //setAuthor("");
      //setUrl("");
      //setLikes("");
    } catch (error) {
      setNotification(error.message);
      setTimeout(() => {
        setNotification(null);
      }, 5000);
    }
  };

  const addNewWork = async () => {
    const newWork = {
      job_title,
      company,
      start_date,
      end_date,
      responsibilities,
      rating
    };
    try {
      await workexperienceServices.create(newWork, user.token);
      setWorkexperience(workexperience.concat(newWork));

      setNotification(`a new work experience ${newWork.job_title} created!`);
      setTimeout(() => {
        setNotification(null);
      }, 5000);
    } catch (error) {
      setNotification(error.message);
      setTimeout(() => {
        setNotification(null);
      }, 5000);
    }
  };

  /**handle login function */
  const handleLogin = async event => {
    event.preventDefault();
    try {
      const user = await loginService.login({
        username,
        password
      });

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
  /**Delete Function */
  const deleteList = async item => {
    const { id, content } = item;
    let r = window.confirm(`delete ${content} ?`);
    if (r === true) {
      try {
        await portfolioServices.deleteList(id, user.token);
        setNotification(
          `Information of ${content} has been removed from the server.`
        );
        setTimeout(() => {
          setNotification(null);
        }, 5000);
        //setItemObj({});
      } catch (error) {
        setPortfolio(portfolio);
        setNotification(
          `You have no permission to delete ${content} from the server.
            Please refresh the page and try again!`
        );
        setTimeout(() => {
          setNotification(null);
        }, 5000);
      }

      setPortfolio(portfolio.filter(p => p.id !== id));
      setNotification(`${content}'s entry has been erased`);
      setTimeout(() => {
        setNotification(null);
      }, 5000);
    } else if (r === false) {
      setNotification(`You did not cancel ${content}'s entry`);
      setTimeout(() => {
        setNotification(null);
      }, 5000);
      return;
    }
  };

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
            handleContentChange={handleContentChange}
            handleTechnologyChange={handleTechnologyChange}
            handleInfoChange={handleInfoChange}
            handleTypeChange={handleTypeChange}
            handleVotesChange={handleVotesChange}
            content={content}
            technology={technology}
            info={info}
            type={type}
            votes={votes}
            deleteList={deleteList}
            user={user}
            addNewWork={addNewWork}
            job_title={job_title}
            company={company}
            start_date={start_date}
            end_date={end_date}
            responsibilities={responsibilities}
            rating={rating}
            handleJob_titleChange={handleJob_titleChange}
            handleCompanyChange={handleCompanyChange}
            handleStart_dateChange={handleStart_dateChange}
            handleEnd_dateChange={handleEnd_dateChange}
            handleResponsibilityChange={handleResponsibilityChange}
            handleRatingChange={handleRatingChange}
          />
        </div>
      )}
    </div>
  );
};

export default App;
