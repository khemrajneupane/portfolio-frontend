import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "../components/About";
import PortfolioList from "../components/PortfolioList";
import PortfolioDescription from "../components/PortfolioDescription";
import WorkExperienceDescription from "../components/WorkExperienceDescription";

import Footer from "../components/Footer";
import WithRouterCreate from "../components/CreateNewPortfolio";
import CurriculumVitae from "../components/CV";
import Hobbies from "../components/Hobbies";

import WithRouterCreateWorkExperience from "../components/CreateNewWorkExperience";
import WorkExperienceList from "../components/WorkExperienceList";
import {
  Button,
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from "react-bootstrap";
const HeaderLink = () => {
  const styles = {
    height: 90,
    width: 100,
    position: "relative"
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="container"
    >
      <Link className="navbar-brand" to="/portfolio">
        <img
          style={styles}
          className="navbar-brand"
          src={require("../assets/pic.png")}
          alt="khempic"
        />
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link className="navbar-brand" to="/">
            About Me
          </Link>
          <Link className="navbar-brand" to="/portfolio">
            Projects
          </Link>
          <Link className="navbar-brand" to="/workexperience">
            Experiences
          </Link>
          <Link className="navbar-brand" to="/cv">
            CV
          </Link>
          <Link className="navbar-brand" to="/hobbies">
            Hobbies
          </Link>
          <NavDropdown title="Create" id="collasible-nav-dropdown">
            <NavDropdown.Item>
              {" "}
              <Link to="/createjobs">Create Jobs</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/create">Create Profiles</Link>
            </NavDropdown.Item>

            <NavDropdown.Divider />
            <NavDropdown.Item
              href="http://myy.haaga-helia.fi/~a1800727/DigitalServiceTask/NepalFinlandAssignment/NepalAssignment/NepalWebsiteTemp/NepalWebsiteTemp.html"
              target="blank"
            >
              My Favourite Link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav className="mr-auto">
          <Link className="navbar-brand" to="/">
            Khem Raj Neupane
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

/************************Navigation */
const Navigation = props => {
  const [page, setPage] = useState("/");
  const toPage = page => event => {
    event.preventDefault();
    setPage(page);
  };
  console.log(page);
  const conditionalRender = () => {
    if (page === "/") {
      return (<About />), (<Footer />);
    } else if (page === "create") {
      return (<WithRouterCreate />), (<Footer />);
    } else if (page === "portfolio") {
      return (<PortfolioList />), (<Footer />);
    } else if (page === "cv") {
      return (<CurriculumVitae />), (<Footer />);
    } else if (page === "hobbies") {
      return (<Hobbies />), (<Footer />);
    } else if (page === "workexperience") {
      return (<WorkExperienceList />), (<Footer />);
    }
  };

  const portfolioById = id => props.portfolio.find(a => a.id === id);
  const workExperienceById = id => props.workexperience.find(a => a.id === id);
  const styles = {
    height: "100%",
    width: "100%",
    border: "15px solid lightgrey",
    marginBottom: "100px",
    backgroundColor: "#f0edeb"
  };

  return (
    <div>
      <Router>
        <div>
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
          <Route
            exact
            path="/workexperience"
            render={() => (
              <WorkExperienceList workexperience={props.workexperience} />
            )}
          />
          <Route
            exact
            path="/workexperience/:id"
            render={({ match }) => (
              <WorkExperienceDescription
                workexperience={workExperienceById(match.params.id)}
              />
            )}
          />
          <Route exact path="/" render={() => <About />} />
          <Route
            exact
            path="/create"
            render={() => <WithRouterCreate addNew={props.addNew} />}
          />
          <Route
            exact
            path="/createjobs"
            render={() => (
              <WithRouterCreateWorkExperience addNewWork={props.addNewWork} />
            )}
          />

          <Route exact path="/cv" render={() => <CurriculumVitae />} />
          <Route exact path="/hobbies" render={() => <Hobbies />} />
        </div>
      </Router>
      {conditionalRender()}
    </div>
  );
};

export default Navigation;
