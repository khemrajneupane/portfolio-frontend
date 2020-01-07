import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import About from "./About";
import Portfolio from "./Portfolio";
import PortfolioList from "./PortfolioList";
import Footer from "./Footer";
import WithRouterCreate from "./CreateNewPortfolio";
import CreateNew from "./CreateNewPortfolio";

const Menu = () => {
  const padding = {
    paddingRight: 5
  };
  return (
    <div>
      <Link style={padding} to="/">
        portfolio
      </Link>
      <Link style={padding} to="/create">
        create new
      </Link>
      <Link style={padding} to="/about">
        about
      </Link>
    </div>
  );
};
/*
const CreateNew = props => {
  const [content, setContent] = useState("");
  const [technology, settechnology] = useState("");
  const [info, setInfo] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    props.addNew({
      content,
      technology,
      info,
      type,
      votes: 0
    });
    props.history.push("/");
  };

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input
            name="content"
            value={content}
            onChange={e => setContent(e.target.value)}
          />
        </div>
        <div>
          technology
          <input
            name="technology"
            value={technology}
            onChange={e => settechnology(e.target.value)}
          />
        </div>
        <div>
          url for more info
          <input
            name="info"
            value={info}
            onChange={e => setInfo(e.target.value)}
          />
        </div>
        <div>
          type of technology
          <input
            name="type"
            value={type}
            onChange={e => setType(e.target.value)}
          />
        </div>
        <button>create</button>
      </form>
    </div>
  );
};
const WithRouterCreate = withRouter(CreateNew);
*/
/************************App */
const App = () => {
  const [portfolio, setPortfolio] = useState([
    {
      content:
        "Book Store Application. In this application...You can login to this application",
      technology: "SpringBoot, Java & Thymeleaf",
      type: "Full-stack",
      info: "https://khem-bookcategory.herokuapp.com/login",
      votes: 0,
      id: "1"
    },
    {
      content:
        "Fitness club's customer registery, customer information and scheduling etc. You can login to this app or create your ow credentials",
      technology: "Reactjs, ES6, JSX-Syntax",
      type: "Front-End",
      info: "https://khem-fitnessclub-db.herokuapp.com/",
      votes: 0,
      id: "2"
    }
  ]);

  const [notification, setNotification] = useState("");
  const [page, setPage] = useState("home");

  const content = () => {
    if (page === "home") {
      return (<Portfolio />), (<Footer />);
    } else if (page === "create") {
      return (<CreateNew />), (<Footer />);
    } else if (page === "about") {
      return (<About />), (<Footer />);
    }
  };

  const addNew = portfolio => {
    portfolio.id = (Math.random() * 10000).toFixed(0);
    setPortfolio(portfolio.concat(portfolio));
    setNotification(`a new portfolio ${portfolio.content} created!`);
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  const portfolioById = id => portfolio.find(a => a.id === id);

  const vote = id => {
    const anecdote = portfolioById(id);

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    };

    setPortfolio(portfolio.map(a => (a.id === id ? voted : a)));
  };

  return (
    <div>
      <Router>
        <div>
          <h1>My Portfolio</h1>
          <Menu />

          <div style={{ backgroundColor: "lightblue" }}>
            {notification ? notification : null}
          </div>
          <Route
            exact
            path="/"
            render={() => <PortfolioList portfolio={portfolio} />}
          />
          <Route
            exact
            path="/portfolio/:id"
            render={({ match }) => (
              <Portfolio portfolio={portfolioById(match.params.id)} />
            )}
          />
          <Route exact path="/about" render={() => <About />} />
          <Route
            exact
            path="/create"
            render={() => <WithRouterCreate addNew={() => addNew()} />}
          />
        </div>
      </Router>
      {content()}
    </div>
  );
};

export default App;
