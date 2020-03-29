import React from "react";
import { withRouter } from "react-router-dom";
import "../../index.css";

import "react-toastify/dist/ReactToastify.css";

const CreateNewPortfolio = props => {
  const handleSubmit = e => {
    e.preventDefault();
    props.addNew();
    props.history.push("/");
  };

  return (
    <div className="container">
      <h2>Add More Projects to Your Portfolio</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            id="project-name"
            className="form-control"
            name="content"
            value={props.content}
            type="text"
            placeholder="project name or description"
            onChange={props.handleContentChange}
          />
        </div>
        <div>
          <input
            id="technology-name"
            className="form-control"
            name="technology"
            value={props.technology}
            type="text"
            placeholder="technology names"
            onChange={props.handleTechnologyChange}
          />
        </div>
        <div>
          <input
            id="project-url"
            className="form-control"
            name="info"
            value={props.info}
            type="URL"
            placeholder="project link or URL"
            onChange={props.handleInfoChange}
          />
        </div>
        <div>
          <input
            id="project-type"
            className="form-control"
            name="type"
            value={props.type}
            type="text"
            placeholder="full-stack, frot-end back-end"
            onChange={props.handleTypeChange}
          />
        </div>
        <div>
          <input
            id="project-rate"
            className="form-control"
            name="votes"
            value={props.votes}
            type="number"
            min="1"
            max="5"
            placeholder="rate this project [1-5]"
            onChange={props.handleVotesChange}
          />
        </div>

        <button id="project-btn" className="btn btn-primary">Add To Portfolio</button>
      </form>
    </div>
  );
};
const WithRouterCreate = withRouter(CreateNewPortfolio);
export default WithRouterCreate;
