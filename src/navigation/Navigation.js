import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "../components/About";
import PortfolioList from "../components/PortfolioList";
import PortfolioDescription from "../components/PortfolioDescription";
import Footer from "../components/Footer";
import WithRouterCreate from "../components/CreateNewPortfolio";
import CurriculumVitae from "../components/CV";

const HeaderLink = () => {
  const styles = {
    height: 150,
    marginRight:-150,
    padding:15
  };
  return (
    <div className="flex container jumbotron">
                
            {/*{<img style={styles}  src={require("../assets/pic.png")} alt="khempic" />}*/}
        <button className="btn btn-secondary">  
      <Link   to="/">
        About
      </Link>
      </button> 
      <button className="btn btn-secondary">
      <Link   to="/portfolio">
        Portfolio
      </Link>
      </button>
      <button className="btn btn-secondary">
      <Link  to="/cv">
        Curriculum Vitae
      </Link>
      </button>
      <button className="btn btn-secondary">
      <Link   to="/create">
        Create Profile
      </Link>
      </button>
    </div>
  );
};

/************************Navigation */
const Navigation = props => {
  const [page, setPage] = useState("/");
  const toPage = (page) => (event) => {
    event.preventDefault()
    setPage(page)
  }
  console.log(page)
  const conditionalRender = () => {
    if (page === "/" ) {
      return (<About />),(<Footer />)
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
