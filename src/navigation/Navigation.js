import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "../components/About";
import PortfolioList from "../components/portfolios/PortfolioList";
import PortfolioDescription from "../components/portfolios/PortfolioDescription";
import WorkExperienceDescription from "../components/experiences/WorkExperienceDescription";

import Footer from "../components/Footer";
import WithRouterCreate from "../components/portfolios/CreateNewPortfolio";
import CurriculumVitae from "../components/CV";
import Hobbies from "../components/Hobbies";

import WithRouterCreateWorkExperience from "../components/experiences/CreateNewWorkExperience";
import WorkExperienceList from "../components/experiences/WorkExperienceList";
import { MenuItem } from "@material-ui/core";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Dashboard from "../components/Dashboard";

const HeaderLink = () => {
  const styles = {
    height: 90,
    width: 100,
    position: "relative"
  };

  const LogOut = () => {
    window.localStorage.removeItem("loggedUser");
    window.location.reload("/login");
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
          <Link id="me" className="navbar-brand" to="/">
            About Me
          </Link>
          <Link id="projects" className="navbar-brand" to="/portfolio">
            Projects
          </Link>
          <Link id="experiences" className="navbar-brand" to="/workexperience">
            Experiences
          </Link>
          <Link id="colleges" className="navbar-brand" to="/dashboard">
            Dashboard
          </Link>
          <Link id="cv" className="navbar-brand" to="/cv">
            CV
          </Link>
          <Link id="hobbies" className="navbar-brand" to="/hobbies">
            Hobbies
          </Link>
          <NavDropdown title="Add" id="collasible-nav-dropdown">
            <MenuItem>
              <Link id="add-experience" to="/createjobs">
                Experiences
              </Link>
            </MenuItem>
            <MenuItem>
              <Link id="add-project" to="/create">
                Projects
              </Link>
            </MenuItem>

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
        <Nav className="mr-auto">
          <Link
            id="logout"
            className="navbar-brand"
            to="/login"
            onClick={() => LogOut()}
          >
            Logout
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

  const conditionalRender = () => {
    if (page === "/") {
      return (<About />), (<Footer />);
    } else if (page === "create") {
      return (<WithRouterCreate />), (<Footer />);
    } else if (page === "portfolio") {
      return (
        (
          <PortfolioList
            portfolio={props.portfolio}
            deleteList={props.deleteList}
            allusers={props.allusers}
          />
        ),
        (<Footer />)
      );
    } else if (page === "cv") {
      return (<CurriculumVitae />), (<Footer />);
    } else if (page === "hobbies") {
      return (<Hobbies />), (<Footer />);
    } else if (page === "workexperience") {
      return (
        (
          <WorkExperienceList
            workexperience={props.workexperience}
            deleteExperience={props.deleteExperience}
            allusers={props.allusers}
          />
        ),
        (<Footer />)
      );
    } else if (page === "dashboard") {
      return (<Dashboard portfolio={props.portfolio} workexperience={props.workexperience}/>), (<Footer />);
    }
  };

  const portfolioById = id => props.portfolio.find(a => a.id === id);
  const workExperienceById = id => props.workexperience.find(a => a.id === id);

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
            render={() => (
              <PortfolioList
                portfolio={props.portfolio}
                deleteList={props.deleteList}
                allusers={props.allusers}
              />
            )}
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
              <WorkExperienceList
                workexperience={props.workexperience}
                deleteExperience={props.deleteExperience}
                allusers={props.allusers}
              />
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
            render={() => (
              <WithRouterCreate
                handleContentChange={props.handleContentChange}
                handleTechnologyChange={props.handleTechnologyChange}
                addNew={props.addNew}
                handleInfoChange={props.handleInfoChange}
                handleTypeChange={props.handleTypeChange}
                handleVotesChange={props.handleVotesChange}
                content={props.content}
                technology={props.technology}
                info={props.info}
                type={props.type}
                votes={props.votes}
              />
            )}
          />
          <Route
            exact
            path="/createjobs"
            render={() => (
              <WithRouterCreateWorkExperience
                addNewWork={props.addNewWork}
                job_title={props.job_title}
                company={props.company}
                start_date={props.start_date}
                end_date={props.end_date}
                responsibilities={props.responsibilities}
                rating={props.rating}
                handleJob_titleChange={props.handleJob_titleChange}
                handleCompanyChange={props.handleCompanyChange}
                handleStart_dateChange={props.handleStart_dateChange}
                handleEnd_dateChange={props.handleEnd_dateChange}
                handleResponsibilityChange={props.handleResponsibilityChange}
                handleRatingChange={props.handleRatingChange}
              />
            )}
          />

          <Route exact path="/hobbies" render={() => <Hobbies />} />
          <Route exact path="/cv" render={() => <CurriculumVitae />} />
          <Route exact path="/logout" />
          <Route exact path="/dashboard" render={() => <Dashboard portfolio={props.portfolio} workexperience={props.workexperience}/>} />
        </div>
      </Router>

      {conditionalRender()}
    </div>
  );
};

export default Navigation;
