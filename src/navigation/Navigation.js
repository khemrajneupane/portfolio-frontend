import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "../components/About";
import PortfolioList from "../components/PortfolioList";
import PortfolioDescription from "../components/PortfolioDescription";
import Footer from "../components/Footer";
import WithRouterCreate from "../components/CreateNewPortfolio";
import CurriculumVitae from "../components/CV";

const HeaderLink = () => {
  const padding = {
    paddingRight: 5
  };
  return (
    <div>
      <Link style={padding} to="/">
        About
      </Link>

      <Link style={padding} to="/portfolio">
        Portfolio
      </Link>
      <Link style={padding} to="/cv">
        Curriculum Vitae
      </Link>
      <Link style={padding} to="/create">
        Create Profile
      </Link>
    </div>
  );
};

/************************Navigation */
const Navigation = props => {
  const [page, setPage] = useState("about");
  const conditionalRender = () => {
    if (page === "about") {
      return (<About />), (<Footer />);
    } else if (page === "create") {
      return (<WithRouterCreate />), (<Footer />);
    } else if (page === "portfolio") {
      return (<PortfolioList />), (<Footer />);
    } else if (page === "cv") {
      return (<CurriculumVitae />), (<Footer />);
    }
  };

  const portfolioById = id => props.portfolio.find(a => a.id === id);

  return (
    <div>
      <Router>
        <div>
          <div>
            <img src={require("../assets/pic.png")} alt="khempic" />
          </div>

          <HeaderLink />

          <div style={{ backgroundColor: "lightblue" }}>
            {props.notification ? props.notification : null}
          </div>
          <Route
            exact
            path="/portfolio"
            render={() => <PortfolioList portfolio={props.portfolio} />}
          />
          <Route
            exact
            path="/portfolio/:id"
            render={({ match }) => (
              <PortfolioDescription
                portfolio={portfolioById(match.params.id)}
              />
            )}
          />
          <Route exact path="/" render={() => <About />} />
          <Route
            exact
            path="/create"
            render={() => <WithRouterCreate addNew={props.addNew} />}
          />
          <Route exact path="/cv" render={() => <CurriculumVitae />} />
        </div>
      </Router>
      {conditionalRender()}
    </div>
  );
};

export default Navigation;
