import React, { useState, useEffect } from "react";
import "../src/index.css";
import Navigation from "./navigation/Navigation";
import portfolioServices from "./services/Portfolios";
import workexperienceServices from "./services/Workexperiences";
import Notification from "./components/Notification";

import loginService from "./services/login";
import LoginForm from "./components/LoginForm";
import userServices from "./services/users";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const [allusers, setAllusers] = useState([]);

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

  useEffect(() => {
    userServices.getAll().then(response => {
      setAllusers(response);
    });
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
      toast.success(
        `a new blog ${newObject.info} by ${newObject.technology} added `,
        {
          position: toast.POSITION.TOP_LEFT
        }
      );
      setContent("");
      settechnology("");
      setInfo("");
      setType("");
      setVotes("");
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
      toast.success(`a new work experience ${newWork.job_title} created!`, {
        position: toast.POSITION.TOP_LEFT
      });
      setJob_title("");
      setCompany("");
      setStart_date("");
      setEnd_date("");
      setResponsibilities("");
      setRating("");
    } catch (error) {
      toast.success(error.message, {
        position: toast.POSITION.TOP_LEFT
      });
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
      toast.success(`Welcome ${username}!`, {
        position: toast.POSITION.TOP_LEFT
      });
    } catch (exception) {
      toast.success(
        `Username- ${username} & Password- ${password}' are wrong credentials!`,
        {
          position: toast.POSITION.TOP_LEFT
        }
      );
    }
  };
  /**Delete Portfolio Function */
  const deleteList = async item => {
    const { id, content } = item;
    let r = window.confirm(`delete ${content} ?`);
    if (r === true) {
      try {
        await portfolioServices.deleteList(id, user.token);
        toast.success(
          `Information of ${content} has been removed from the server.`,
          {
            position: toast.POSITION.TOP_LEFT
          }
        );
      } catch (error) {
        setPortfolio(portfolio);
        toast.success(
          `You have no permission to delete ${content} from the server.
            Please refresh the page and try again!`,
          {
            position: toast.POSITION.TOP_LEFT
          }
        );
      }
      setPortfolio(portfolio.filter(p => p.id !== id));
    } else if (r === false) {
      toast.success(`You did not cancel ${content}'s entry`, {
        position: toast.POSITION.TOP_RIGHT
      });
      return;
    }
  };
  /**Delete Experience Function */
  const deleteExperience = async item => {
    const { id, job_title } = item;
    let r = window.confirm(`delete ${job_title} job?`);
    if (r === true) {
      try {
        await workexperienceServices.deleteList(id, user.token);
        toast.success(
          `Your ${job_title}´s job has been removed from the server.`,
          {
            position: toast.POSITION.TOP_LEFT
          }
        );
      } catch (error) {
        setWorkexperience(workexperience);
        toast.success(
          `You have no permission to delete ${content} from the server.`,
          {
            position: toast.POSITION.TOP_LEFT
          }
        );
      }

      setWorkexperience(workexperience.filter(p => p.id !== id));
    } else if (r === false) {
      toast.success(`You did not cancel ${job_title}'s job`, {
        position: toast.POSITION.TOP_LEFT
      });
      return;
    }
  };

  return (
    <div>
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
              workexperience={workexperience}
              deleteExperience={deleteExperience}
              allusers={allusers}
            />
          </div>
        )}
        <ToastContainer autoClose={2000} />
      </div>
    </div>
  );
};

export default App;
